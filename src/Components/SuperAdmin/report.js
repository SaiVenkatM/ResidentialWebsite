import React, { Component } from 'react';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, Legend, Tooltip, Cell } from 'recharts';
import ReportTables from '../BuildingManager/reportDropDownTable';
import HandleAPI from '../../HandleAPI';

class report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            barChartData: [
                { year: '2018', Security: 5, Pool: 1, Garden: 2, Visitor: 6, Apartment: 5 },
                { year: '2020', Security: 10, Pool: 1, Garden: 4, Visitor: 7, Apartment: 15 },
                { year: '2022', Security: 16, Pool: 2, Garden: 7, Visitor: 9, Apartment: 25 },
            ],
            pieChartData: [
                { name: 'Pool', value: 2 },
                { name: 'Gardens', value: 5 },
                { name: ' Walking Trails', value: 6 },
                { name: 'Tennis', value: 4 }
            ],
            pieChartColors: ['#0000cd', '#ff2800', '#228b22', '#fada5e'],
            tableSelectValue: (""),
            tableData:[],
            feedbackData:[]
        }
        this.handleInputValChange = this.handleInputValChange.bind(this);

    }

    handleInputValChange(val, e) {
        let tableSelectValue = this.state.tableSelectValue;
        tableSelectValue = e.target.value;
        this.setState({ tableSelectValue });
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})

        console.log("select drop down value = ", tableSelectValue);
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
    };

    getResponseFeedbackData = (data) => {
        if(data !== this.state.feedbackData){
            this.setState({ feedbackData: data });
        }
        
        let handleAPIFeedbackFlag = false
        this.setState({handleAPIFeedbackFlag: handleAPIFeedbackFlag})
    }

    componentDidMount(){

        let handleAPIFeedbackFlag = true
        this.setState({handleAPIFeedbackFlag: handleAPIFeedbackFlag})
    }

    render() {
        let tableData = '';

        let data = {
            'role':this.state.tableSelectValue
        };

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="5">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phnumber}</td>
            </tr>
        })}
        let feedbackData = '';
        if(this.state.feedbackData  === "No records present"){
            feedbackData = <tr><td colSpan="5">No Records Found</td></tr>
        }else{
            feedbackData = this.state.feedbackData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.option1}</td>
                <td>{obj.option2}</td>
                <td>{obj.option3}</td>
                <td>{obj.option4}</td>
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
                                Number of Managers existing by role
                            </text>
                            <Legend />
                            <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomLeft' }} />
                            <YAxis label={{ value: 'Managers Type', angle: -90, position: 'LeftBotton' }} />
                            <Tooltip />
                            <Bar dataKey="Security" fill="#0000ff" />
                            <Bar dataKey="Pool" fill="#ffa500" />
                            <Bar dataKey="Garden" fill="#006400" />
                            <Bar dataKey="Visitor" fill="#ff1493" />
                            <Bar dataKey="Apartment" fill="#a020f0" />
                        </BarChart>
                    </div>
                    <div class="report-column">
                        <PieChart width={500} height={300}>
                            <text x={90} y={20} >
                                Amenities Count
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
                    <h3>Get to know more about each Manager Type Staff</h3>
                    <select value={this.state.value} onChange={this.handleInputValChange.bind(this, "role")}>
                        <option value="">Select Manager</option>
                        <option value="securityManager">Security Manager</option>
                        <option value="poolManager">Pool Manager</option>
                        <option value="gardenManager">Garden Manager</option>
                        <option value="visitorManager">Visitor Manager</option>
                        <option value="apartmentManager">Apartment Manager</option>
                        <option value="buildingManager">Building Manager</option>
                    </select>
                </div>
                {/* <ReportTables data={this.state.tableSelectValue} /> */}
                <div class="table-responsive">
                    <table>
                        <tr>
                        <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Contact number</th>
                        </tr>
                        {tableData}
                    </table>
                </div>
                <div class="report-data">
                <h3>Get to know more about feedback raised by the users.</h3>
                </div>
                
                <div class="table-responsive">
                    <table>
                        <tr>
                        <th>S.No</th>
                            <th>How was your experience with our website?</th>
                            <th>How likely are you to recommend our website to a friend or colleague?</th>
                            <th>How was your experience with our customer service?</th>
                            <th>How likely are you to visit us again in the future?</th>
                        </tr>
                        {feedbackData}
                    </table>
                </div>
                {this.state.handleAPIFeedbackFlag && <HandleAPI data={data} funcName = "feedbackGetAPI" responseData = {this.getResponseFeedbackData}/>}
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "buildingManagerReport" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default report;
