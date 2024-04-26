import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class HandleRequest extends Component {

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
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        console.log("get response data function in visitor manager handle request", data)

    };

    componentDidMount() {
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }


    render() {

        let data =  {
            // 'reqid':this.state.inputFields["reqid"],
            // 'vname':this.state.name,
            'email':this.props.email,
            // 'phnumber':this.state.inputFields["phnumber"],
            // 'incidentType':this.state.inputFields["incidentType"],
            // 'query':this.state.inputFields["query"],
            // 'status':this.state.inputFields["status"]
        }

        let tableData="";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData =this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.reqid}</td>
                <td>{obj.vname}</td>
                <td>{obj.email}</td>
                <td>{obj.phnumber}</td>
                <td>{obj.incidentType}</td>
                <td>{obj.query}</td>
                {/* <td>{obj.status}</td> */}
            </tr>
        })}

        return (
            <>
                <div class="container">
                    <h2>Handle Requests</h2>
                </div>
                <div class="div">
                    {/* <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button> */}
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Request ID</th>
                            <th>Visitor Name</th>
                            <th>Email ID</th>
                            <th>Contact Number</th>
                            <th>Incident Type</th>
                            <th>Query</th>
                            {/* <th>Status</th> */}
                            {/* <th>Actions</th> */}
                        </tr>
                        {tableData}
                    </table>
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "visitorLogsAPI" responseData = {this.getResponseData}/>}
                </div>
            </>
        );
    }
}

export default HandleRequest;