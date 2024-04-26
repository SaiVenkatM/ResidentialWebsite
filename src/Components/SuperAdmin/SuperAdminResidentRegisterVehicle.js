import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class SuperAdminResidentRegisterVehicle extends Component {

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

        let data = "";

        let tableData = "";
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="7">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.lastName}</td>
                <td>{obj.emailID}</td>
                <td>{obj.contactNumber}</td>
                <td>{obj.vehicleMake}</td>
                <td>{obj.vehicleModel}</td>
                <td>{obj.vehicleLicense}</td>
            </tr>
        })}

        return (
            <>
                <div class="container">
                    <h2>Resident Profiles</h2>
                </div>
                <div class="div">
                    {/* <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button> */}
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Vehicle Make</th>
                            <th>Vehicle Model</th>
                            <th>Vehicle License</th>
                            <th>Contact Number</th>
                        </tr>
                        {tableData}
                    </table>
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "superAdminResidentRegisterVehicle" responseData = {this.getResponseData}/>}
                </div>
            </>
        );
    }
}

export default SuperAdminResidentRegisterVehicle;