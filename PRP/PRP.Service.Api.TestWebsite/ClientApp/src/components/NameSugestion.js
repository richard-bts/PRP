import React, { Component } from 'react';


export class NameSugestion extends Component {
    static displayName = NameSugestion.name;
    
    constructor(props) {
        super(props);
        this.state = { datasets: [], loading: true };
        this.text = { value: 'tes' };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.populateData();
    }
  
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
        
    static renderTable(datasets) {
        return (
            

            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>clientID</th>
                        <th>companyName</th>

                    </tr>
                </thead>
                <tbody>
                    {datasets.map(dataset =>
                        <tr key={dataset.clientID}>
                            <td>{dataset.clientID}</td>
                            <td>{dataset.companyName}</td>
                
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : NameSugestion.renderTable(this.state.datasets);

        return (
            <div>
                <h1 id="tabelLabel" >Company Name </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.text.value} onChange={this.handleChange} />
                    </label>
                    
                </form>
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
            Name: this.text.value,
        });
        const response = await fetch(`http://172.24.32.132/Xcelerator/CDLPRP/api/report/GetCompanyName?${queryString}`);

        const data = await response.json();
        console.log(data);
        this.setState({ datasets: data.result, loading: false });
    }
}
