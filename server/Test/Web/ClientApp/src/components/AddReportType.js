import React, { Component } from 'react';

export class AddReportType extends Component {
    static displayName = AddReportType.name;

    constructor(props) {
        super(props);
        this.state = { dataset: null, loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderTable(dataset) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Report Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={dataset.report_id}>
                        <td>{dataset.report_id}</td>
                        <td>{dataset.report_name}</td>
                        <td>{dataset.date_created}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AddReportType.renderTable(this.state.dataset);

        return (
            <div>
                <h1 id="tabelLabel" >Scan Report</h1>
                <p>This component demonstrates posting data to the server.</p>
                {contents}
            </div>
        );
    }

    async populateData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ report_name:'test7'})
        };

        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/report/addreporttype`,requestOptions);
        
        const data = await response.json();
        console.log(data);
        this.setState({ dataset: data.result, loading: false });
    }
}
