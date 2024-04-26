import React, { Component } from 'react';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, Legend, Tooltip, Cell } from 'recharts';
import HandleAPI from "../../HandleAPI";

class report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            barChartData: [
                { year: '2018', NumberOfSecurity: 55 },
                { year: '2020', NumberOfSecurity: 150 },
                { year: '2022', NumberOfSecurity: 200 },
            ],
            pieChartData: [
                { name: 'Quater1', value: 150 },
                { name: 'Quater2', value: 100 },
                { name: 'Quater3', value: 125 },
                { name: 'Quater4', value: 120 }
            ],
            pieChartColors: ['#0000cd', '#ff2800', '#228b22', '#fada5e'],
            handleAPIFlag: false,
            tableData: [],
        }
    }
    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", data)
    };

    componentDidMount() {
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }


    render() {

        let tableData = '';
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="10">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index+1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.age}</td>
                <td>{obj.location}</td>
            </tr>
        })}

        let data = {}

        return (
            <>
                <div class="container">
                    <h2>Report Dashboard</h2>
                </div>
                <div className='report-row'>
                    <div class="report-column">
                        <BarChart width={480} height={300} data={this.state.barChartData}>
                            <text x={100} y={20} >
                                Number of Security
                            </text>
                            <Legend />
                            <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomLeft' }} />
                            <YAxis label={{ value: 'Number of Security', angle: -90, position: 'LeftBotton' }} />
                            <Tooltip />
                            <Bar dataKey="NumberOfSecurity" fill="#0000ff" />
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
                    <h3>Get to know more about Security Staff List.</h3>
                </div>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                        {tableData}
                    </table>
                </div>
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="securityStaffAPI" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default report;
