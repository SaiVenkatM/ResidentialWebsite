import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from "../../HandleAPI";

class ManageTimings extends Component {

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
            handleAPIInsertFlag:false,
            handleAPIFlag: false,
            createFlag: false,
            deleteFlag: false,
            editFlag: false,
            handleAPICreateFlag:false,
            handleAPIDeleteFlag:false,
            handleAPIEditFlag:false,
            tableData: [],
            createData: [{
                "Name": "",
                "EmailID": "",
                "Location": "",
                "ScheduledDays": "",
                "ShiftTimings": "",
            }],
            editTableData: [{
                "Name": "",
                "EmailID": "",
                "Location": "",
                "ScheduledDays": "",
                "ShiftTimings": "",
            }],
            editdata: "",
        }

        this.handleEditAction = this.handleEditAction.bind(this);
        this.handleDeleteAction = this.handleDeleteAction.bind(this);
        this.handleCreateAction = this.handleCreateAction.bind(this);
        this.dialogBoxPopup = this.dialogBoxPopup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.editService = this.editService.bind(this);
        this.getResponseData = this.getResponseData.bind(this);
    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        // if (!inputFields[0]) {
        //     validateForm = false;
        //     editErrors["Name"] = "Name cannot be empty";
        // } else {
        //     editErrors["Name"] = "";
        // }

        // if (!inputFields["EmailID"]) {
        //     validateForm = false;
        //     editErrors["EmailID"] = "EmailID field cannot be empty";
        // } else {
        //     editErrors["EmailID"] = "";
        // }

        // if (inputFields["EmailID"] && !inputFields["EmailID"].match(/[^\s]*@[a-zA-Z0-9.-]*/i)) {
        //     validateForm = false;
        //     editErrors["EmailID"] = "Please check provided Email Id.";
        // }

        // if (!inputFields[2]) {
        //     validateForm = false;
        //     editErrors["Location"] = "Location field cannot be empty";
        // } else {
        //     editErrors["Location"] = "";
        // }

        if (!inputFields.schedule) {
            validateForm = false;
            editErrors["ScheduledDays"] = "Scheduled Days field cannot be empty";
        } else {
            editErrors["ScheduledDays"] = "";
        }

        if (inputFields.schedule && !inputFields.schedule.match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ScheduledDays"] = "Please provide a valid ScheduledDays.";
        }

        if (!inputFields.shift) {
            validateForm = false;
            editErrors["ShiftTimings"] = "Shift Timings field cannot be empty";
        } else {
            editErrors["ShiftTimings"] = "";
        }

        if (inputFields.shift && !inputFields.shift.match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["ShiftTimings"] = "Please provide a valid ShiftTimings.";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["Name"]) {
            validateForm = false;
            errors["Name"] = "Name cannot be empty";
        } else {
            errors["Name"] = "";
        }

        if (inputFields["Name"] && !inputFields["Name"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["Name"] = "Please provide a valid name.";
        }

        if (!inputFields["EmailID"]) {
            validateForm = false;
            errors["EmailID"] = "EmailID field cannot be empty";
        } else {
            errors["EmailID"] = "";
        }

        if (inputFields["EmailID"] && !inputFields["EmailID"].match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
            validateForm = false;
            errors["EmailID"] = "Please check provided Email Id.";
        }

        if (!inputFields["Location"]) {
            validateForm = false;
            errors["Location"] = "Location field cannot be empty";
        } else {
            errors["Location"] = "";
        }

        if (inputFields["Location"] && !inputFields["Location"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["Location"] = "Please provide a valid Location.";
        }

        if (!inputFields["ScheduledDays"]) {
            validateForm = false;
            errors["ScheduledDays"] = "Scheduled Days field cannot be empty";
        } else {
            errors["ScheduledDays"] = "";
        }

        if (inputFields["ScheduledDays"] && !inputFields["ScheduledDays"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ScheduledDays"] = "Please provide a valid ScheduledDays.";
        }

        if (!inputFields["ShiftTimings"]) {
            validateForm = false;
            errors["ShiftTimings"] = "Shift Timings field cannot be empty";
        } else {
            errors["ShiftTimings"] = "";
        }

        if (inputFields["ShiftTimings"] && !inputFields["ShiftTimings"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["ShiftTimings"] = "Please provide a valid ShiftTimings.";
        }

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.dialogBoxPopup();
        console.log("inside handle create action data")
    }

    createSecurity = (e) => {
        if (this.handleFormValidation()) {

            console.log("create data", this.state.createData)
            this.dialogBoxPopup();
         
            let handleAPICreateFlag = true
            this.setState({handleAPICreateFlag: handleAPICreateFlag})
            console.log("handleAPICreateflag value", this.state.handleAPICreateFlag)
            
        } else {
            let showError = this.state.showError;
            showError = true;
            this.setState({ showError });
            console.log("errors inside login page")
        }

    }

    editService = (e) => {
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

    handleCreate = (val, e) => {
        let createData = this.state.createData;
        createData[val] = e.target.value;
        this.setState({ createData })
        console.log("inside handle input change", createData);
    }

    handleEditAction = (val, e) => {
        this.setState({ editAction: true })
        this.dialogBoxPopup();
        this.setState({ editdata: val })
    }

    handleDeleteAction = (val, e) => {
        // let newTableData = this.state.tableData;
        // newTableData.splice(val - 1, 1);
        // this.setState({ tableData: newTableData });
        this.setState({deleteVal:val})
        let handleAPIDeleteFlag = true
        this.setState({handleAPIDeleteFlag: handleAPIDeleteFlag})
    }

    dialogBoxPopup = () => {
        this.setState({ showDialogBoxPopup: !this.state.showDialogBoxPopup });
    }

    handleInputChange = (val, e) => {
        let tableData = this.state.tableData;
        tableData[this.state.editdata][val] = e.target.value;
        this.setState({ tableData })
        console.log("inside handle input change", tableData);
    }

    getEditResponseData = (flag) => {
        if(flag !== this.state.editFlag){
            this.setState({ editFlag: flag });
        }
        console.log("flag in edit response data",flag)
        if(flag){
            alert("Couldn't edit record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

        let handleAPIEditFlag = false
        this.setState({handleAPIEditFlag: handleAPIEditFlag})
        console.log("handleEditFlag value", this.state.handleAPIEditFlag)

    }

    getDeleteResponseData = (flag) => {
        if(flag !== this.state.deleteFlag){
            this.setState({ deleteFlag: flag });
        }
        console.log("flag in create response data",flag)
        if(flag){
            alert("Couldn't delete record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

        let handleAPIDeleteFlag = false
        this.setState({handleAPIDeleteFlag: handleAPIDeleteFlag})
        console.log("handleAPIDeleteFlag value", this.state.handleAPIDeleteFlag)
        console.log("get response data function in security manager staff", flag)
    }

    getCreateResponseData = (flag) => {

        let handleAPICreateFlag = false
        this.setState({handleAPICreateFlag: handleAPICreateFlag})
        console.log("handleAPICreateFlag value", this.state.handleAPICreateFlag)
        console.log("get response data function in security manager staff", flag)
        if(flag){
            alert("Couldn't create record!!!")
        }

        if(flag !== this.state.createFlag){
            this.setState({ createFlag: flag });
        }
        console.log("flag in create response data",flag)

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

    }

    getResponseInsertData = (data) => {
        let handleAPIInsertFlag = false
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})
        console.log("handleAPIflag value", this.state.handleAPIInsertFlag)

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIFlag value", this.state.handleAPIFlag)
    };

    getResponseData = (data) => {
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", data)

        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }

        let createDataEdit = [{
            "Name": "",
            "EmailID": "",
            "Location": "",
            "ScheduledDays": "",
            "ShiftTimings": "",
        }]
        this.setState({ createAction: false })
        this.setState({ createData: createDataEdit })
    };

    componentDidMount() {
        let handleAPIInsertFlag = true
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})
        {console.log("handleAPIflag value", this.state.handleAPIInsertFlag)}
    }


    render() {

        let tableData='';
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.location}</td>
                <td>{obj.schedule}</td>
                <td>{obj.shift}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        let data =  {
            // 'name': this.state.inputFields["Name"],
            // 'email': this.state.inputFields['EmailID'],
            // 'location':this.state.inputFields['Location'],
            // 'schedule':this.state.inputFields['ScheduledDays'],
            // 'shift': this.state.inputFields['ShiftTimings']
        }

        let createPayload = {
                'name': this.state.createData.Name,
                'email':this.state.createData.EmailID,
                'location':this.state.createData.Location,
                'schedule':this.state.createData.ScheduledDays,
                'shift':this.state.createData.ShiftTimings,
        }

        return (
            <>
                <div class="container">
                    <h2>Manage Staff Timings</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Location</th>
                            <th>Scheduled Days</th>
                            <th>Shift Timings</th>
                            <th>Actions</th>
                        </tr>
                        {tableData}
                    </table>
                    {this.state.editAction && (
                        <Modal
                            isOpen={this.state.showDialogBoxPopup}
                            onRequestClose={this.dialogBoxPopup.bind(this)}
                            className="boxstyling"
                        >
                            <form>
                                <label>Enter Scheduled Days:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "schedule")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ScheduledDays"]}</span><br /></>}
                                <label>Enter Shift Timings:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][4]}
                                    onChange={this.handleInputChange.bind(this, "shift")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ShiftTimings"]}</span><br /></>}
                            </form>
                            <button onClick={this.editService.bind(this)}>
                                Submit
                            </button>&nbsp;
                        </Modal>
                    )}
                    {this.state.createAction && (
                        <Modal
                            isOpen={this.state.showDialogBoxPopup}
                            onRequestClose={this.dialogBoxPopup.bind(this)}
                            className="boxstyling"
                        >
                            <form>
                                <label>Enter Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.Name}
                                    onChange={this.handleCreate.bind(this, "Name")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Name"]}</span><br /></>}
                                <label>Enter Email Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.EmailID}
                                    onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["EmailID"]}</span><br /></>}
                                <label>Enter Location:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.Location}
                                    onChange={this.handleCreate.bind(this, "Location")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Location"]}</span><br /></>}
                                <label>Enter Scheduled Days:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ScheduledDays}
                                    onChange={this.handleCreate.bind(this, "ScheduledDays")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ScheduledDays"]}</span><br /></>}
                                <label>Enter Shift Timings:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ShiftTimings}
                                    onChange={this.handleCreate.bind(this, "ShiftTimings")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ShiftTimings"]}</span><br /></>}
                            </form>
                            <button onClick={this.createSecurity.bind(this)}>
                                Create
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIInsertFlag && <HandleAPI data={data} funcName="manageStaffTimings" responseData = {this.getResponseInsertData}/>}
                    {this.state.handleAPIFlag && <HandleAPI data={data} funcName="manageStaffGetTimings" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="manageStaffCreateTimings" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "manageStaffDeleteTimings" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "manageStaffEditTimings" responseData = {this.getEditResponseData} />}
                </div>
            </>
        );
    }
}

export default ManageTimings;