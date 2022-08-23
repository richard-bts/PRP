import React, { Component } from 'react';

export class PODReport extends Component {
    static displayName = PODReport.name;

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
                        <th>orderTrackingID</th>
                        <th>clientRefNo</th>
                        <th>barcode</th>
                        <th>dContact</th>
                        <th>dStreet</th>
                        <th>dStreet2</th>
                        <th>dCity</th>
                        <th>dState</th>
                        <th>dZip</th>
                        <th>poDcompletionTime</th>
                    </tr>
                </thead>
                <tbody>
                    {datasets.map(dataset =>
                        <tr key={dataset.orderTrackingID}>
                            <td>{dataset.clientID}</td>
                            <td>{dataset.orderTrackingID}</td>
                            <td>{dataset.clientRefNo}</td>
                            <td>{dataset.barcode}</td>
                            <td>{dataset.dContact}</td>
                            <td>{dataset.dStreet}</td>
                            <td>{dataset.dStreet2}</td>
                            <td>{dataset.dCity}</td>
                            <td>{dataset.dState}</td>
                            <td>{dataset.dZip}</td>
                            <td>{dataset.poDcompletionTime}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PODReport.renderTable(this.state.datasets);

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
        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/report/getpodreport?${queryString}`);
        
        const data = await response.json();
        console.log(data);
        this.setState({ datasets: data.result, loading: false });
    }
}
