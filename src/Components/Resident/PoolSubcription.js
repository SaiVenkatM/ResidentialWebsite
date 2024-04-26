import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class PoolSubcription extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }
  
    render() {

        let data =  {}

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
                    <h2>Pool Events</h2>
                </div>
                <div class="div">
                    {/* <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button> */}
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Pool Events</th>
                            <th>Event ID</th>
                            <th>Match Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                        {tableData}
                    </table>
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "PoolEventsAPI" responseData = {this.getResponseData}/>}
                </div>
            </>
        );
    }
}

export default PoolSubcription;