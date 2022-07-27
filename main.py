from argparse import _MutuallyExclusiveGroup
from distutils.log import debug
from flask import Flask, render_template, request, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from sqlalchemy import BIGINT, ForeignKey, exc, cast, Date, Column, Integer, DECIMAL, String, DateTime, false, insert, Time
from sqlalchemy.ext.automap import automap_base 
from sqlalchemy.orm import Session
from datetime import date, datetime, timedelta, time
from smtplib import SMTPException
from dotenv import load_dotenv
from logging.config import dictConfig
from logging.handlers import SMTPHandler
from sqlalchemy.ext.declarative import declarative_base
from utils.utility import json_return


import xlsxwriter
import os
import logging



dictConfig(
            {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
            'default': {
                        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
                       },
            'simpleformatter' : {
                        'format' : '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
            }
    },
    'handlers':
    {
        'file_handler': {
            'class' : 'logging.FileHandler',
            'formatter': 'default',
            'filename' : 'warnings.log',
            'level': 'INFO',
        }, 

        'mail_handler': {
            'class': 'logging.handlers.SMTPHandler',
            'mailhost': ('smtp.gmail.com', 465), 
            'fromaddr': 'oyedelesegunfunmi@gmail.com', 
            'toaddrs': ['oyesegun123@gmail.com'],
            'credentials': ('oyedelesegunfunmi@gmail.com', 'gdpmfostoussfscf'),
            'subject': 'CDL PRP ERROR', 
            'level': 'WARN'

        }
    },
    'root': {
        'level': 'WARN',
        'handlers': ['file_handler', 'mail_handler']
    },
})
#

load_dotenv()

app = Flask(__name__)

# Database 
driver = 'SQL Server'
user_name = os.getenv("USER_NAME")
server = os.getenv("SERVER_NAME")
db_name = os.getenv("DB_NAME")
password = os.getenv("DB_PASS")
app.config["SQLALCHEMY_DATABASE_URI"] = f"mssql+pyodbc://{user_name}:{password}@{server}/{db_name}?driver={driver}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# configuration of mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = str(os.getenv('EMAIL'))
app.config['MAIL_DEFAULT_SENDER'] = str(os.getenv('EMAIL'))
app.config['MAIL_PASSWORD'] = 'gdpmfostoussfscf'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config["CACHE_TYPE"] = "null"

support = []
for r in  os.getenv('SUPPORT').split(','):
    support.append(str(r))

mail = Mail(app)

db = SQLAlchemy(app)

# Base = automap_base()/
Base = declarative_base()

def _name_for_collection_relationship(base, local_cls, referred_cls, constraint):
    if constraint.name:
        return constraint.name.lower()
    # if this didn't work, revert to the default behavior
    return name_for_collection_relationship(base, local_cls, referred_cls, constraint)

class Partner(Base):
    __tablename__ = "partner"
    __table_args__ = {'implicit_returning':False}
    partner_id = Column(Integer, primary_key=True)
    client_id = Column(Integer, nullable=False)
    partner_name = Column(String(255), nullable=False)
    partner_report_time = Column(Time)
    date_created = Column(DateTime)
    date_modified = Column(DateTime)
    active = Column(Integer, nullable=False)


class PartnerEmail(Base):
    __tablename__ = "partner_email"
    __table_args__ = {'implicit_returning':False}
    partner_email_id = Column(Integer, primary_key=True)
    partner_id = Column(Integer)
    email = Column(String(255), nullable=False)
    active = Column(Integer, nullable=False)
    date_created = Column(DateTime)
    date_modified = Column(DateTime)

class ReportType(Base):
    __tablename__ = "report_type"
    __table_args__ = {'implicit_returning':False}
    report_type_id = Column(Integer, primary_key=True)
    report_name = Column(String(255), nullable=False)
    date_created = Column(DateTime)
    date_modified = Column(DateTime)

class PartnerReportType(Base):
    __tablename__ = "partner_report_type"
    __table_args__ = {'implicit_returning':False}
    partner_report_type_id = Column(Integer, primary_key=True)
    partner_id = Column(Integer, nullable=False)
    report_type_id = Column(Integer, nullable=False)
    active = Column(Integer, nullable=False)
    date_created = Column(DateTime)
    date_modified = Column(DateTime)

class Report(Base):
    __tablename__ = "report"
    __table_args__ = {'implicit_returning':False}
    report_id = Column(Integer,  primary_key=True)
    report_type_id = Column(Integer)
    partner_id = Column(Integer)
    date_created = Column(DateTime)

# Base.prepare(db.engine, reflect=True, name_for_collection_relationship=_name_for_collection_relationship)
Base.metadata.create_all(db.engine)
session = Session(db.engine,autocommit=False, autoflush=True)

# READS 
def get_partner(partner_id): 
    partner = {}
    success = False,
    msg = ''

    try: 
        dbquery = session.query(
            Partner.partner_id, 
            Partner.partner_name, 
            Partner.active, 
            Partner.client_id, 
            Partner.partner_report_time
        )

        dbquery = dbquery.filter(Partner.partner_id == partner_id)
        partner_det = [r._asdict() for r in dbquery.all()]
        partner_report_types, success, msg = get_partner_report_types(partner_id)
        partner_emails, success, msg = get_partner_emails(partner_id)
        if len(partner_det) > 0:
            partner = {
                'partner_id': partner_det[0]['partner_id'],
                'partner_name': partner_det[0]['partner_name'],
                'active': partner_det[0]['active'],
                'client_id': partner_det[0]['client_id'],
                'partner_report_time':  str(partner_det[0]['partner_report_time']),
                'partner_report_types': partner_report_types,
                'partner_emails': partner_emails
            }            
        success = True 
        msg = 'Partner retrieved successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner, success, msg)

def get_all_partners(): 
    partners = []
    success = False,
    msg = ''

    try: 
        dbquery = session.query(
            Partner.partner_id
        )

        partners_list = [r._asdict() for r in dbquery.all()]
        for partner in partners_list:
            p, success, msg = get_partner(partner['partner_id'])
            partners.append(p)
        success = True 
        msg = 'Partner retrieved successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partners, success, msg)

def get_active_partners(): 
    partners = []
    success = False,
    msg = ''

    try: 
        dbquery = session.query(
            Partner.partner_id, 
        )

        dbquery = dbquery.filter(Partner.active == 1)

        partners_list = [r._asdict() for r in dbquery.all()]
        for partner in partners_list:
            p, success, msg = get_partner(partner['partner_id'])
            partners.append(p)
        success = True 
        msg = 'Partner retrieved successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partners, success, msg)


def get_inactive_partners(): 
    partners = []
    success = False,
    msg = ''

    try: 
        dbquery = session.query(
            Partner.partner_id, 
        )

        dbquery = dbquery.filter(Partner.active == 0)

        partners_list = [r._asdict() for r in dbquery.all()]
        for partner in partners_list:
            p, success, msg = get_partner(partner['partner_id'])
            partners.append(p)
        success = True 
        msg = 'Partner retrieved successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partners, success, msg)


def get_partner_emails(partner_id):
    partner_emails = []
    success = True
    msg = ''
    try:
        dbquery = session.query(
            PartnerEmail.partner_email_id,
            PartnerEmail.partner_id,
            PartnerEmail.email, 
            PartnerEmail.active)
        
        dbquery = dbquery.filter(PartnerEmail.partner_id == partner_id)
        partner_emails = [r._asdict() for r in dbquery.all()]
        msg = 'Partner emails retrieved successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner_emails, success, msg)


def get_report_types(): 
    report_types = []
    success = False
    msg = ''
    try: 
        dbquery = session.query(
            ReportType.report_type_id, 
            ReportType.report_name)
        report_types = [r._asdict() for r in dbquery.all()]
        success = True 
        msg = 'Report Types generated successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_types, success, msg)


def get_partners_report_types():
    report_types = []
    success = False
    msg = ''
    try: 
        dbquery = session.query(
            PartnerReportType.partner_report_type_id, 
            PartnerReportType.report_type_id, 
            PartnerReportType.active)
        report_types = [r._asdict() for r in dbquery.all()]
        success = True 
        msg = 'Partner Report Types generated successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_types, success, msg)

def get_partner_report_types(partner_id):
    report_types = []
    success = False
    msg = ''
    try: 
        dbquery = session.query(
            PartnerReportType.partner_report_type_id, 
            PartnerReportType.report_type_id, 
            PartnerReportType.active)
        dbquery = dbquery.filter(PartnerReportType.partner_id == partner_id)
        report_types = [r._asdict() for r in dbquery.all()]
        success = True 
        msg = 'Partner Report Types generated successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_types, success, msg)


def get_reports(): 
    reports = []
    success = False
    msg = ''
    try: 
        dbquery = session.query(
            Report.report_id, 
            Report.partner_id, 
            Report.date_created)
        reports = [r._asdict() for r in dbquery.all()]
        success = True 
        msg = 'Report generated successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (reports, success, msg)

def get_partner_reports(partner_id): 
    reports = []
    success = False
    msg = ''
    try: 
        dbquery = session.query(
            Report.report_id, 
            Report.partner_id, 
            Report.date_created)
        dbquery = dbquery.filter(Report.partner_id == partner_id)
        reports = [r._asdict() for r in dbquery.all()]
        for report in reports:
            report['date_created'] = str(report['date_created'])
        success = True 
        msg = 'Report generated successfully'
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (reports, success, msg)




# WRITES

def create_partner(client_id, partner_name, partner_report_time, partner_report_types, partner_emails):
    isInline = True
    success = True 
    msg = 'New Partner Added Successfully'
    partner={}
    try: 
        new_partner = Partner()
        setattr(new_partner, 'partner_name', partner_name)
        setattr(new_partner, 'active', 1)
        setattr(new_partner, 'client_id', client_id)
        setattr(new_partner, 'partner_report_time', partner_report_time)
        setattr(new_partner, 'date_created', datetime.now())
        session.add(new_partner)
        session.flush()
        partner_id = new_partner.partner_id  

        for report_type in partner_report_types:
            new_partner_report_type = PartnerReportType()
            setattr(new_partner_report_type, 'partner_id', partner_id)
            setattr(new_partner_report_type, 'report_type_id', report_type['report_type_id'])
            setattr(new_partner_report_type, 'active', report_type['active'])
            setattr(new_partner_report_type, 'date_created', datetime.now())
            session.merge(new_partner_report_type)
        if partner_emails is not None and len(partner_emails) > 0:
            partner_emails = partner_emails.replace(" ", "")
            emails = partner_emails.split(',')
            for email in emails:
                new_partner = PartnerEmail()
                setattr(new_partner, 'partner_id', partner_id)
                setattr(new_partner, 'email', email)
                setattr(new_partner, 'active', 1)
                setattr(new_partner, 'date_created', datetime.now())
                session.merge(new_partner)
        session.commit()
        partner, success, msgg = get_partner(partner_id)
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner, success, msg)

def add_partner_email(partner_id, partner_email):
    isInline = True
    partner_emails = []
    msg = ''
    success = False 
    try:
        if partner_email is not None and len(partner_email) > 0:
            partner_email = partner_email.replace(" ", "")
            emails = partner_email.split(',')
            for email in emails:
                new_partner = PartnerEmail()
                setattr(new_partner, 'partner_id', partner_id)
                setattr(new_partner, 'email', email)
                setattr(new_partner, 'active', 1)
                setattr(new_partner, 'date_created', datetime.now())
                session.merge(new_partner)
            session.commit()
            partner_emails, success, msg = get_partner_emails(partner_id)
        else: 
            msg = 'Invalid Partner Email cannot be added'
            return (partner_emails, success, msg)
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner_emails, success, msg)  

def update_partner(partner_id, partner_name, partner_report_time, active): 
    isInline = True
    success = True
    msg = 'Partner details updated successfully'
    partner = {}
    try:
        dbquery = session.query(Partner.partner_name, Partner.partner_report_time)
        dbquery = dbquery.filter(Partner.partner_id == partner_id)
        dbquery = dbquery.update({'partner_name': partner_name, 'partner_report_time': partner_report_time, 'active': active, 'date_modified': datetime.now()})
        session.commit()
        partner, success, msgg = get_partner(partner_id)
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner, success, msg)

def update_partner_email(partner_email_id, partner_id, email, active):
    isInline = True
    success = False
    msg = ''
    partner_email = {}

    try: 
        dbquery = session.query(
            PartnerEmail.partner_id, 
            PartnerEmail.email, 
            PartnerEmail.partner_email_id,
            PartnerEmail.active)
        dbquery = dbquery.filter(PartnerEmail.partner_email_id == partner_email_id)
        dbquery = dbquery.update({'email': email, 'active': active, 'date_modified': datetime.now()})
        session.commit()
        success = True 
        msg = 'Partner Email Updated Successfullly'
        partner_email, success, msg = get_partner(partner_id)
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (partner_email, success, msg)


def add_report_type(report_name): 
    isInline = True
    success = False, 
    msg = ''
    report_type = {}

    try:
        new_report_type = ReportType()
        setattr(new_report_type, 'report_name', report_name)
        setattr(new_report_type, 'date_created', datetime.now())
        session.flush()
        new_report_type_id = new_report_type.report_type_id
        session.merge(new_report_type)

        partners, success,msg = get_all_partners()
        for partner in partners: 
            new_partner_report_type = PartnerReportType()
            setattr(new_partner_report_type, 'report_type_id', new_report_type_id)
            setattr(new_partner_report_type, 'partner_id', partner['partner_id'])
            setattr(new_partner_report_type, 'active', 0)
            setattr(new_partner_report_type, 'date_created', datetime.now())
            session.merge(new_partner_report_type)
        session.commit()
        report_type, success, msg = get_report_types()
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_type, success, msg)

def add_partner_report_type(partner_id): 
    isInline = True
    success = False, 
    msg = ''
    report_types = []

    try:
        report_types, success, msg = get_report_types()
        for report_type in report_types:
            new_report_type = PartnerReportType()
            setattr(new_report_type, 'partner_id', partner_id)
            setattr(new_report_type, 'report_type_id', report_type['report_type_id'])
            setattr(new_report_type, 'active', 1)
            setattr(new_report_type, 'date_created', datetime.now())
            session.merge(new_report_type)
        session.commit()
        report_types, success, msg = get_partners_report_types()
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_types, success, msg)

def update_partner_report_type(partner_id, report_type_id, active): 
    isInline = True
    success = False, 
    msg = ''
    report_types = []

    try:
        
        dbquery = session.query(
            PartnerReportType.partner_id,
            PartnerReportType.report_type_id, 
            PartnerReportType.active )
        dbquery = dbquery.filter(PartnerReportType.partner_id == partner_id and PartnerReportType.report_type_id == report_type_id)
        dbquery = dbquery.update({'active': active, 'date_modified': datetime.now()})
        session.commit()
        report_types, success, msg = get_partner(partner_id)
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (report_types, success, msg)

def add_partner_report(partner_id, report_type_id):
    isInline = True
    success = False, 
    msg = ''
    reports =[]
    try: 
        new_report = Report()
        setattr(new_report, 'partner_id', partner_id)
        setattr(new_report, 'report_type_id', report_type_id)
        setattr(new_report, 'date_creaed', datetime.now())
        session.merge(new_report)
        session.commit()
        reports, success, msg = get_reports()
    except Exception as err: 
        success = False 
        msg = err.args[0]
    return (reports, success, msg)




# ROUTES - API ENDPOINTS
@app.route('/')
def home_rte():
    """ Home Route to Load Page """
    return render_template('home.html')

#Partner
@app.route('/partners/', methods=['POST', 'GET'])
def get_all_partners_rte():
    partners, success, msg = get_all_partners()
    return json_return(partners, success, msg)

@app.route('/partner/', methods=['POST', 'GET'])
def get_partner_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    partner, success, msg = get_partner(partner_id=partner_id)
    return json_return(partner, success, msg)

@app.route('/create-partner/', methods=['POST', 'GET'])
def create_partner_rte():
    input_data = request.get_json()
    client_id = input_data['client_id']
    partner_name = input_data['partner_name']
    partner_report_time = input_data['partner_report_time']
    partner_report_types = input_data['partner_report_types']
    partner_emails = input_data['partner_emails']
    partner, success, msg = create_partner(client_id, partner_name, partner_report_time, partner_report_types, partner_emails)
    return json_return(partner, success, msg)


@app.route('/update-partner/', methods=['POST', 'GET'])
def update_partner_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    partner_name = input_data['partner_name']
    partner_report_time = input_data['partner_report_time']
    active = input_data['active']
    partner, success, msg = update_partner(partner_id, partner_name, partner_report_time, active)
    return json_return(partner, success, msg)

@app.route('/active-partners/', methods=['POST', 'GET'])
def get_active_partners_rte():
    partners, success, msg = get_active_partners()
    return json_return(partners, success, msg)

@app.route('/inactive-partners/', methods=['POST', 'GET'])
def get_inactive_partners_rte():
    partners, success, msg = get_inactive_partners()
    return json_return(partners, success, msg)

#Partner Emails 
@app.route('/partner-emails/', methods=['POST', 'GET'])
def get_partner_emails_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    emails, success, msg = get_partner_emails(partner_id=partner_id)
    return json_return(emails, success, msg)

@app.route('/add-partner-email/', methods=['POST', 'GET'])
def add_partner_email_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    partner_email = input_data['partner_email']
    emails, success, msg = add_partner_email(partner_id, partner_email)
    return json_return(emails, success, msg)

@app.route('/update-partner-email/', methods=['POST', 'GET'])
def update_partner_email_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    partner_email_id = input_data['partner_email_id']
    email = input_data['email']
    active = input_data['active']
    emails, success, msg = update_partner_email(partner_email_id, partner_id, email, active)
    return json_return(emails, success, msg)

#Reports 
@app.route('/reports/', methods=['POST', 'GET'])
def get_reports_rte():
    reports, success, msg = get_reports()
    return json_return(reports, success, msg)

@app.route('/partner-reports/', methods=['POST', 'GET'])
def get_partner_reports_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    reports, success, msg = get_partner_reports(partner_id=partner_id)
    return json_return(reports, success, msg)


@app.route('/add-partner-report/', methods=['POST', 'GET'])
def add_partner_reports_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    report_type_id = input_data['report_type_id']
    print("PARTNER ID: ", partner_id)
    print("REPORT TYPE ID: ", report_type_id)
    reports, success, msg = add_partner_report(partner_id, report_type_id)
    return json_return(reports, success, msg)

#Report Types
@app.route('/report-types/', methods=['POST', 'GET'])
def get_report_types_rte():
    reports, success, msg = get_report_types()
    return json_return(reports, success, msg)

@app.route('/partner-report-types/', methods=['POST', 'GET'])
def get_partner_report_types_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    reports, success, msg = get_partner_report_types(partner_id=partner_id)
    return json_return(reports, success, msg)

@app.route('/update-partner-report-type/', methods=['POST', 'GET'])
def update_partner_report_types_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    report_type_id = input_data['report_type_id']
    active = input_data['active']
    reports, success, msg = update_partner_report_type(partner_id, report_type_id, active)
    return json_return(reports, success, msg)

@app.route('/add-default-partner-report-types/', methods=['POST', 'GET'])
def add_partner_report_type_rte():
    input_data = request.get_json()
    partner_id = input_data['partner_id']
    reports, success, msg = add_partner_report_type(partner_id)
    return json_return(reports, success, msg)

@app.route('/add-report-type/', methods=['POST', 'GET'])
def add_report_type_rte():
    input_data = request.get_json()
    report_name = input_data['report_name']
    reports, success, msg = add_report_type(report_name)
    return json_return(reports, success, msg)




@app.route('/unauthorized')
def unauthorized_rte():
    """ Home Route to Load Page """
    return render_template('unauthorized.html')

@app.errorhandler(500)
def internal_error(exception):
    return render_template('500.html'), 500

if __name__ == "__main__":
    app.run()