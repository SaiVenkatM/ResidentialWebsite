import React, { Component } from 'react';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, Legend, Tooltip, Cell } from 'recharts';
import HandleAPI from '../../HandleAPI';

class report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            barChartData: [
                { year: '2018', Cabins: 130, Studios: 62, TownHouses: 75 },
                { year: '2020', Cabins: 150, Studios: 75, TownHouses: 82 },
                { year: '2022', Cabins: 170, Studios: 100, TownHouses: 97 },
            ],
            pieChartData: [
                { name: 'Occupied', value: 250 },
                { name: 'Vacent', value: 117 },
            ],
            pieChartColors: ['#0000cd', '#ff2800'],
            handleAPIFlag: false,
            tableData: [],
        }
        this.getResponseData = this.getResponseData.bind(this);
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
    };

    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
    }

    render() {

        let tableData = '';

        let data = {};

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="5">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.apttype}</td>
                <td>{obj.roomnum}</td>
            </tr>
        })}
        return (
            <>
                <div class="container">
                    <h2>Report Dashboard</h2>
                </div>
                <div className='report-row'>
                    <div class="report-column">
                        <BarChart width={480} height={300} data={this.state.barChartData}>
                            <text x={100} y={20} >
                                Number of Apartment Type present
                            </text>
                            <Legend />
                            <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomLeft' }} />
                            <YAxis label={{ value: 'Number of Apartments', angle: -90, position: 'LeftBotton' }} />
                            <Tooltip />
                            <Bar dataKey="Cabins" fill="#0000ff" />
                            <Bar dataKey="Studios" fill="#ff0000" />
                            <Bar dataKey="TownHouses" fill="#ffa500" />
                        </BarChart>
                    </div>
                    <div class="report-column">
                        <PieChart width={500} height={300}>
                            <text x={90} y={20} >
                                Residents Count
                            </text>
                            <Pie dataKey="value" data={this.state.pieChartData}>
                                {this.state.pieChartData.map((key, idx) => (
                                    <Cell fill={this.state.pieChartColors[idx % this.state.pieChartColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
                <div class="report-data">
                    <h3>Get to know more about Occupied Residents list</h3>
                </div>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Apartment Type</th>
                            <th>Apartment Number</th>
                        </tr>
                        {tableData}
                    </table>
                </div>
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "aptManagerReport" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default report;
