import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ScanReport } from './components/ScanReport.js';
import { PODReport } from './components/PODReport.js';
import { ExceptionReport } from './components/ExceptionReport.js';
import { AddReportType } from './components/AddReportType.js';
import { AddPartnerEmail } from './components/AddPartnerEmail.js';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/scan-report' component={ScanReport} />
            <Route path='/pod-report' component={PODReport} />
            <Route path='/exception-report' component={ExceptionReport} />
            <Route path='/add-report-type' component={AddReportType} />
            <Route path='/add-partner-email' component={AddPartnerEmail} />
      </Layout>
    );
  }
}
