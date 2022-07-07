import React, { Component } from 'react';

export class ScanReport extends Component {
    static displayName = ScanReport.name;

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
                        <th>scaNcode</th>
                        <th>scaNlocation</th>
                        <th>aTimeStamp</th>
                    </tr>
                </thead>
                <tbody>
                    {datasets.map(dataset =>
                        <tr key={dataset.orderTrackingID}>
                            <td>{dataset.clientID}</td>
                            <td>{dataset.orderTrackingID}</td>
                            <td>{dataset.clientRefNo}</td>
                            <td>{dataset.scaNcode}</td>
                            <td>{dataset.scaNlocation}</td>
                            <td>{dataset.aTimeStamp}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ScanReport.renderTable(this.state.datasets);

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
        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/report/getscanreport?${queryString}`);
        
        const data = await response.json();
        console.log(data);
        this.setState({ datasets: data.result, loading: false });
    }
}
