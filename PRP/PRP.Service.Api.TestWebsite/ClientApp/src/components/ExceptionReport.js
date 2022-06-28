import React, { Component } from 'react';

export class ExceptionReport extends Component {
    static displayName = ExceptionReport.name;

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
                        <th>clientID</th>
                        <th>trackingNumber</th>
                        <th>exception</th>
                        <th>exceptionDetails</th>
                        <th>eventTimestamp</th>
                        <th>edd</th>
                        <th>city</th>
                        <th>state</th>
                        <th>facilityCode</th>
                    </tr>
                </thead>
                <tbody>
                    {datasets.map(dataset =>
                        <tr key={dataset.trackingNumber}>
                            <td>{dataset.clientID}</td>
                            <td>{dataset.trackingNumber}</td>
                            <td>{dataset.exception}</td>
                            <td>{dataset.exceptionDetails}</td>
                            <td>{dataset.eventTimestamp}</td>
                            <td>{dataset.edd}</td>
                            <td>{dataset.city}</td>
                            <td>{dataset.state}</td>
                            <td>{dataset.facilityCode}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ExceptionReport.renderTable(this.state.datasets);

        return (
            <div>
                <h1 id="tabelLabel" >Scan Report</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    async populateData() {
        const queryString = this.objToQueryString({
            inputDate: '04/04/2022',
            clientID: 112,
        });
        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/report/getexceptionreport?${queryString}`);
        
        const data = await response.json();
        console.log(data);
        this.setState({ datasets: data.result, loading: false });
    }
}
