import React, { Component } from 'react';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, Legend, Tooltip, Cell } from 'recharts';
import HandleAPI from '../../HandleAPI';

class report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            barChartData: [
                { year: '2018', NumberOfVisitors: 255 },
                { year: '2020', NumberOfVisitors: 350 },
                { year: '2022', NumberOfVisitors: 495 },
            ],
            pieChartData: [
                { name: 'Quater1', value: 150 },
                { name: 'Quater2', value: 100 },
                { name: 'Quater3', value: 125 },
                { name: 'Quater4', value: 120 }
            ],
            pieChartColors: ['#0000cd', '#ff2800', '#228b22', '#fada5e'],
            tableData:[]
        }
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        console.log("get response data function in visitor list", data)
    };

    componentDidMount() {
        // this.props.setRole("");
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
    }


    render() {
        let tableData = '';

        let data = {
            'role':this.state.tableSelectValue
        };

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="10">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.resname}</td>
                <td>{obj.aptnum}</td>
                <td>{obj.roomnum}</td>
                <td>{obj.date}</td>
                <td>{obj.intime}</td>
                <td>{obj.outtime}</td>
                <td>{obj.email}</td>
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
                                Number of Visitors
                            </text>
                            <Legend />
                            <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomLeft' }} />
                            <YAxis label={{ value: 'Number of Visitors', angle: -90, position: 'LeftBotton' }} />
                            <Tooltip />
                            <Bar dataKey="NumberOfVisitors" fill="#0000ff" />
                        </BarChart>
                    </div>
                    <div class="report-column">
                        <PieChart width={500} height={300}>
                            <text x={90} y={20} >
                                Number of Visitors per Quater
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
                    <h3>Get to know more about people who have Visited the complex</h3>
                </div>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Visitor Name</th>
                            <th>Resident Name</th>
                            <th>Apartment Type</th>
                            <th>Room Number</th>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Email ID</th>
                        </tr>
                        {tableData}
                    </table>
                </div>
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "visitorManagerReport" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default report;
