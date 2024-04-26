import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from "../../HandleAPI";

class MyProfile extends Component {


    constructor(props) {
        super(props);

        this.state = {
            editAction: false,
            createAction: false,
            showDialogBoxPopup: false,
            inputFields: {},
            errors: {},
            editErrors: {},
            showError: false,
            showEditError: false,
            handleAPIFlagInsert: false,
            handleAPIFlag: false,
            handleAPIEditFlag: false,
            tableData: [],
            editTableData: [{
                "phoneNumber": "",
                "DLNumber": "",
                "CarNumberPlate": "",
            }],
        }

        this.handleEditAction = this.handleEditAction.bind(this);
        this.dialogBoxPopup = this.dialogBoxPopup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editEvent = this.editEvent.bind(this);
    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[0];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields.phnumber) {
            validateForm = false;
            editErrors["phoneNumber"] = "Phone Number cannot be empty";
        } else {
            editErrors["phoneNumber"] = "";
        }

        if (!inputFields.dlnumber) {
            validateForm = false;
            editErrors["DLNumber"] = "DL Number field cannot be empty";
        } else {
            editErrors["DLNumber"] = "";
        }

        if (!inputFields.carnumplate) {
            validateForm = false;
            editErrors["CarNumberPlate"] = "Car Number Plate field cannot be empty";
        } else {
            editErrors["CarNumberPlate"] = "";
        }

        this.setState({ editErrors });
        return validateForm;
    }

    editEvent = (e) => {
        if (this.handleEditFormValidation()) {
            this.dialogBoxPopup();
            let handleAPIEditFlag = true
            this.setState({handleAPIEditFlag: handleAPIEditFlag})
            this.setState({ editAction: false })
        } else {
            let showEditError = this.state.showEditError;
            showEditError = true;
            this.setState({ showEditError });
        }
    }

    getResponseInsertData = (data) => {
        let handleAPIFlagInsert = false
        this.setState({handleAPIFlagInsert: handleAPIFlagInsert})
        console.log("handleAPIflag value", this.state.handleAPIFlagInsert)

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIFlag value", this.state.handleAPIFlag)
    };

    getEditResponseData = (flag) => {
        if(flag !== this.state.editFlag){
            this.setState({ editFlag: flag });
        }
        console.log("flag in edit response data",flag)

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

        let handleAPIEditFlag = false
        this.setState({handleAPIEditFlag: handleAPIEditFlag})
        console.log("handleEditFlag value", this.state.handleAPIEditFlag)
    }

    getResponseData = (data) => {

        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", data)

        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
    };

    handleEditAction = (val, e) => {
        this.setState({ editAction: true })
        this.dialogBoxPopup();
        this.setState({ editdata: val })
    }

    dialogBoxPopup = () => {
        this.setState({ showDialogBoxPopup: !this.state.showDialogBoxPopup });
    }

    handleInputChange = (val, e) => {
        let tableData = this.state.tableData;
        tableData[0][val] = e.target.value;
        this.setState({ tableData })
        console.log("inside handle input change", tableData);
    }

    componentDidMount() {
        
        let handleAPIFlagInsert = true
        this.setState({handleAPIFlagInsert: handleAPIFlagInsert})
    }

    render() {

        let insertData={}
        {console.log("props email value", this.props.email)}
        let data={
            'email': this.props.email,
            'name': this.props.name
        }

        let profileData="";

        if(this.state.tableData  === "No records present"){
            profileData = <center>No Records Found</center>
        }else{
            profileData = this.state.tableData.map((obj, index) => {
            return <div class="center">
                <p><b>Name:</b> {obj.name}</p>
                <p><b>Email:</b> {obj.email}</p>
                <p><b>Phone Number:</b> {obj.phnumber}</p>
                <p><b>DL Number:</b> {obj.dlnumber}</p>
                <p><b>Car Numberplate:</b> {obj.carnumplate} &nbsp;</p>
                <button class="profile-button" onClick={this.handleEditAction.bind(this)}><i class='fa fa-edit'></i></button>
            </div>
        })}

        return (
            <>
                <div class="container">
                    <h2>My Profile</h2>
                </div>
                {profileData}
                {this.state.editAction && (
                    <Modal
                        isOpen={this.state.showDialogBoxPopup}
                        onRequestClose={this.dialogBoxPopup.bind(this)}
                        className="boxstyling"
                    >
                        <form>
                            <label>Enter Phone Number:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[0][2]}
                                onChange={this.handleInputChange.bind(this, "phnumber")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["phoneNumber"]}</span><br /></>}
                            <label>Enter DL Number:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[0][3]}
                                onChange={this.handleInputChange.bind(this, "dlnumber")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["DLNumber"]}</span><br /></>}
                            <label>Enter Car Number Plate:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[0][4]}
                                onChange={this.handleInputChange.bind(this, "carnumplate")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["CarNumberPlate"]}</span><br /></>}
                        </form>
                        <button onClick={this.editEvent.bind(this)}>
                            Submit
                        </button>&nbsp;
                    </Modal>
                )}
                {this.state.handleAPIFlagInsert && <HandleAPI data={insertData} funcName="residentProfileInsert" responseData = {this.getResponseInsertData}/>}
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="residentProfileGet" responseData = {this.getResponseData}/>}
                {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[0]} funcName = "residentProfileEdit" responseData = {this.getEditResponseData} />}
            </>
        );
    }
}

export default MyProfile;