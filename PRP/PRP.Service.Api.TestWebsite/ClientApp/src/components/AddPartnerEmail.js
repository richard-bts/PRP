import React, { Component } from 'react';

export class AddPartnerEmail extends Component {
    static displayName = AddPartnerEmail.name;

    constructor(props) {
        super(props);
        this.state = { datasets: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderTable(datasets) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Partner_id</th>
                        <th>Email</th>
                        <th>Date_created</th>
                    </tr>
                </thead>
                <tbody>
                    {datasets.map(dataset =>
                        <tr key={dataset.partner_id}>
                            <td>{dataset.partner_id}</td>
                            <td>{dataset.email}</td>
                            <td>{dataset.date_created}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AddPartnerEmail.renderTable(this.state.datasets);

        return (
            <div>
                <h1 id="tabelLabel" >Scan Report</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateData() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ partner_id: 1, email: 'test2@abc.com' })
        };

        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/partner/addpartneremail`, requestOptions);
        
        const data = await response.json();
        console.log(data.result);
        this.setState({ datasets: data.result, loading: false });
    }
}
