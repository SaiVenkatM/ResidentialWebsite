import React, { Component } from 'react';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, Legend, Tooltip, Cell } from 'recharts';
import HandleAPI from '../../HandleAPI';

class report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            barChartData: [
                { year: '2018', PoolSubcriptions: 45 },
                { year: '2020', PoolSubcriptions: 150 },
                { year: '2022', PoolSubcriptions: 280 },
            ],
            pieChartData: [
                { name: 'Pool Party', value: 50 },
                { name: 'Birthday Party', value: 25 },
                { name: 'Pool Activites', value: 17 },
                { name: 'Swimming Classes', value: 20 }
            ],
            pieChartColors: ['#0000cd', '#ff2800', '#228b22', '#fada5e'],
            tableData: [],
            handleAPIFlag: false,
           
        }
        this.getResponseData = this.getResponseData.bind(this);

    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        
    };

    componentDidMount() {
        // this.props.setRole("");
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }

    render() {


        let data = "";

        let tableData = "";
        
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.event}</td>
                <td>{obj.eventid}</td>
                <td>{obj.date}</td>
                <td>{obj.time}</td>
                <td>{obj.status}</td>
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
                                Number of residents subcribed
                            </text>
                            <Legend />
                            <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomLeft' }} />
                            <YAxis label={{ value: 'Pool Subcriptions', angle: -90, position: 'LeftBotton' }} />
                            <Tooltip />
                            <Bar dataKey="PoolSubcriptions" fill="#0000ff" />
                        </BarChart>
                    </div>
                    <div class="report-column">
                        <PieChart width={500} height={300}>
                            <text x={90} y={20} >
                                Pool Events
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
                    <h3>Get to know more about various pool Events</h3>
                </div>
                {/* <div class="report-data">
                    <h3>Get to know more about Garden and Walking Trail Events</h3>
                </div> */}
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Events</th>
                            <th>Event ID</th>
                            <th>Match Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                        {tableData}
                    </table>
                </div>
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "PoolEventsAPI" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default report;
