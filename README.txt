Here are the API endpoints you need to have for now: 

1. Get All Partners: This pulls a list of all the partners in the database. 
    /partners 

2. Get Active Partners: This pulls a list of ONLY Active partners in the databse.
   /active-partners 

3. Get InActive Partners: This pulls a list of ONLY Inactive partners in the databse.
   /inactive-partners  

4. Get Report Types: This pulls a list of the report types we have in the database. For now we have just 3 report types
    /report-types 

5. Get Partner: This pulls the full details of a partner: 
    /partner
    It is a POST method and takes in body as specifiec in Postman

6. Create Partner: This creates a new record of a partner 
    /create-partner 
    It is a POST method and takes in body as specifiec in Postman

7. Add Partner Email: This adds a new email to the list of emails of a partner
    /add-partner-eamil
    It is a POST method and takes in body as specifiec in Postman

8. Update Partner Email: This updates individual email as the partner makes edit to the email. 
    /update-partner-email 
    It is a POST method and takes in body as specifiec in Postman

9. Update Parnter: This updates some details of the partner (partner-name, active, partner_report_time)
    /update-partner
    It is a POST method and takes in body as specifiec in Postman

10. Update Partner Report Types: This updates invidual partner report type status. E.g, a partner can decide not to recive POD reports anymore
    /update-partner-report-type 
    It is a POST method and takes in body as specifiec in Postman



