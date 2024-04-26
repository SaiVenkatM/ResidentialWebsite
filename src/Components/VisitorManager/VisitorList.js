import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from "../../HandleAPI";

class VisitorList extends Component {

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
            handleAPIFlag: false,
            createFlag: false,
            deleteFlag: false,
            editFlag: false,
            insertFlag: false,
            handleAPIInsertFlag:false,
            handleAPICreateFlag:false,
            handleAPIDeleteFlag:false,
            handleAPIEditFlag:false,
            deleteVal:'',
            tableData: [],
            createData: [{
                "VisitorName": "",
                "EmailID": "",
                "ResidentName": "",
                "ApartmentType": "",
                "RoomNumber": "",
                "Date": "",
                "Intime": "",
                "OutTime": "",
            }],
            editTableData: [{
                "VisitorName": "",
                "EmailID": "",
                "ResidentName": "",
                "ApartmentType": "",
                "RoomNumber": "",
                "Date": "",
                "Intime": "",
                "OutTime": "",
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
        // this.insertResponseData = this.insertResponseData.bind(this);
    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[0]) {
            validateForm = false;
            editErrors["VisitorName"] = "Visitor Name cannot be empty";
        } else {
            editErrors["VisitorName"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["VisitorName"] = "Please provide a valid VisitorName.";
        }

        if (!inputFields[1]) {
            validateForm = false;
            editErrors["ResidentName"] = "Resident Name field cannot be empty";
        } else {
            editErrors["ResidentName"] = "";
        }

        if (inputFields[1] && !inputFields[1].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ResidentName"] = "Please provide a ResidentName.";
        }

        if (!inputFields[2]) {
            validateForm = false;
            editErrors["ApartmentType"] = "Apartment Type field cannot be empty";
        } else {
            editErrors["ApartmentType"] = "";
        }

        if (inputFields[2] && !inputFields[2].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["ApartmentType"] = "Please provide a valid ApartmentType.";
        }

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["RoomNumber"] = "Room Number field cannot be empty";
        } else {
            editErrors["RoomNumber"] = "";
        }

        if (inputFields[3] && !inputFields[3].match(/^\d+$/)) {
            validateForm = false;
            editErrors["RoomNumber"] = "Please provide a valid number.";
        }

        if (!inputFields[4]) {
            validateForm = false;
            editErrors["Date"] = "Date field cannot be empty";
        } else {
            editErrors["Date"] = "";
        }


        if (!inputFields[5]) {
            validateForm = false;
            editErrors["InTime"] = "In Time field cannot be empty";
        } else {
            editErrors["InTime"] = "";
        }

        if (!inputFields[6]) {
            validateForm = false;
            editErrors["OutTime"] = "Out Time field cannot be empty";
        } else {
            editErrors["OutTime"] = "";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["VisitorName"]) {
            validateForm = false;
            errors["VisitorName"] = "Visitor Name cannot be empty";
        } else {
            errors["VisitorName"] = "";
        }

        if (inputFields["VisitorName"] && !inputFields["VisitorName"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["VisitorName"] = "Please provide a valid VisitorName.";
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

        if (!inputFields["ResidentName"]) {
            validateForm = false;
            errors["ResidentName"] = "Resident Name field cannot be empty";
        } else {
            errors["ResidentName"] = "";
        }

        if (inputFields["ResidentName"] && !inputFields["ResidentName"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ResidentName"] = "Please provide a ResidentName.";
        }

        if (!inputFields["ApartmentType"]) {
            validateForm = false;
            errors["ApartmentType"] = "Apartment Type field cannot be empty";
        } else {
            errors["ApartmentType"] = "";
        }

        if (inputFields["ApartmentType"] && !inputFields["ApartmentType"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["ApartmentType"] = "Please provide a valid ApartmentType.";
        }

        if (!inputFields["RoomNumber"]) {
            validateForm = false;
            errors["RoomNumber"] = "Room Number field cannot be empty";
        } else {
            errors["RoomNumber"] = "";
        }

        if (inputFields["RoomNumber"] && !inputFields["RoomNumber"].match(/^\d+$/)) {
            validateForm = false;
            errors["RoomNumber"] = "Please provide a valid number.";
        }

        if (!inputFields["Date"]) {
            validateForm = false;
            errors["Date"] = "Date field cannot be empty";
        } else {
            errors["Date"] = "";
        }

        if (!inputFields["InTime"]) {
            validateForm = false;
            errors["InTime"] = "In Time field cannot be empty";
        } else {
            errors["InTime"] = "";
        }

        if (!inputFields["OutTime"]) {
            validateForm = false;
            errors["OutTime"] = "Out Time field cannot be empty";
        } else {
            errors["OutTime"] = "";
        }

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.dialogBoxPopup();
        console.log("inside handle create action data")
    }

    createRequest = (e) => {
        if (this.handleFormValidation()) {

            let handleAPICreateFlag = true
            this.setState({handleAPICreateFlag: handleAPICreateFlag})
            console.log("handleAPICreateflag value", this.state.handleAPICreateFlag)

            // let tableData = [...this.state.tableData, this.state.createData]
            // this.setState({ tableData });
            // this.dialogBoxPopup();
            // let createDataEdit = [{
            //     "VisitorName": "",
            //     "EmailID": "",
            //     "ResidentName": "",
            //     "ApartmentType": "",
            //     "RoomNumber": "",
            //     "Date": "",
            //     "InTime": "",
            //     "OutTime": "",
            // }]
            this.setState({ createAction: false })
            // this.setState({ createData: createDataEdit })
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

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data in manage visitors",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in manage visitors page", data)

        let createDataEdit = [{
                "VisitorName": "",
                "EmailID": "",
                "ResidentName": "",
                "ApartmentType": "",
                "RoomNumber": "",
                "Date": "",
                "InTime": "",
                "OutTime": "",
            }]
            this.setState({ createAction: false })
            this.setState({ createData: createDataEdit })
    };

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
        if(flag !== this.state.createFlag){
            this.setState({ createFlag: flag });
        }
        console.log("flag in create response data",flag)
        if(flag){
            alert("Couldn't create record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

        let handleAPICreateFlag = false
        this.setState({handleAPICreateFlag: handleAPICreateFlag})
        console.log("handleAPICreateFlag value", this.state.handleAPICreateFlag)
        console.log("get response data function in security manager staff", flag)
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

    componentDidMount() {
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        // {console.log("handleAPIInsertFlag value", this.state.handleAPIInsertFlag)}
        
    }

    render() {

        let tableData = '';
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="10">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.resname}</td>
                <td>{obj.aptnum}</td>
                <td>{obj.roomnum}</td>
                <td>{obj.date}</td>
                <td>{obj.intime}</td>
                <td>{obj.outtime}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        let data =  {
            'role':'Visitor',
        }

        let insertData = {}

        let createPayload = {
            
            'name':this.state.createData.VisitorName,
            'email':this.state.createData.EmailID,
            'resname':this.state.createData.ResidentName,
            'aptnum':this.state.createData.ApartmentType,
            'roomnum' : this.state.createData.RoomNumber,
            'date':this.state.createData.Date,
            'intime':this.state.createData.InTime,
            'outtime':this.state.createData.OutTime
        }

        return (
            <>
                <div class="container">
                    <h2>Visitors List</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Visitor Name</th>
                            <th>Email ID</th>
                            <th>Resident Name</th>
                            <th>Apartment Type</th>
                            <th>Room Number</th>
                            <th>Date</th>
                            <th>In time</th>
                            <th>Out time</th>
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
                                <label>Enter Visitor Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][0]}
                                    onChange={this.handleInputChange.bind(this, "name")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["VisitorName"]}</span><br /></>}
                                <label>Enter Resident Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][1]}
                                    onChange={this.handleInputChange.bind(this, "resname")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ResidentName"]}</span><br /></>}
                                <label>Enter Apartment Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][2]}
                                    onChange={this.handleInputChange.bind(this, "aptnum")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ApartmentType"]}</span><br /></>}
                                <label>Enter Room Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "roomnum")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["RoomNumber"]}</span><br /></>}
                                <label>Enter Date:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][4]}
                                    onChange={this.handleInputChange.bind(this, "date")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["Date"]}</span><br /></>}
                                <label>Enter In Time:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][5]}
                                    onChange={this.handleInputChange.bind(this, "intime")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["InTime"]}</span><br /></>}
                                <label>Enter Out Time:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][6]}
                                    onChange={this.handleInputChange.bind(this, "outtime")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["OutTime"]}</span><br /></>}
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
                                <label>Enter Visitor Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.VisitorName}
                                    onChange={this.handleCreate.bind(this, "VisitorName")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["VisitorName"]}</span><br /></>}
                                <label>Enter Email Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.EmailID}
                                    onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["EmailID"]}</span><br /></>}
                                <label>Enter Resident Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ResidentName}
                                    onChange={this.handleCreate.bind(this, "ResidentName")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ResidentName"]}</span><br /></>}
                                <label>Enter Apartment Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ApartmentType}
                                    onChange={this.handleCreate.bind(this, "ApartmentType")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ApartmentType"]}</span><br /></>}
                                <label>Enter Room Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.RoomNumber}
                                    onChange={this.handleCreate.bind(this, "RoomNumber")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["RoomNumber"]}</span><br /></>}
                                <label>Enter Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.createData.Date}
                                    onChange={this.handleCreate.bind(this, "Date")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Date"]}</span><br /></>}
                                <label>Enter In Time:</label><br />
                                <input type="time"
                                    defaultValue={this.state.createData.InTime}
                                    onChange={this.handleCreate.bind(this, "InTime")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["InTime"]}</span><br /></>}
                                <label>Enter Out Time:</label><br />
                                <input type="time"
                                    defaultValue={this.state.createData.OutTime}
                                    onChange={this.handleCreate.bind(this, "OutTime")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["OutTime"]}</span><br /></>}
                            </form>
                            <button onClick={this.createRequest.bind(this)}>
                                Create Visitor
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data={insertData} funcName="manageVisitorsGetAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="manageVisitorsCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "manageVisitorsDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "manageVisitorsEditAPI" responseData = {this.getEditResponseData} />}
                    
                </div>
            </>
        );
    }
}

export default VisitorList;