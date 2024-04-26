import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class Parking extends Component {

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
            handleAPICreateFlag:false,
            handleAPIDeleteFlag:false,
            handleAPIEditFlag:false,
            deleteVal:'',
            tableData: [],
            createData: [{
                "ApartmentType": "",
                "OwnerName": "",
                "EmailID": "",
                "SlotID": "",
                "ManagerName": "",
            }],
            editTableData: [{
                "ApartmentType": "",
                "OwnerName": "",
                "EmailID": "",
                "SlotID": "",
                "ManagerName": "",
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

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        console.log("get response data function in building parking allotment", data)
    };

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[0]) {
            validateForm = false;
            editErrors["ApartmentType"] = "Apartment Type cannot be empty";
        } else {
            editErrors["ApartmentType"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["ApartmentType"] = "Please provide a valid Apartment Type.";
        }

        if (!inputFields["1"]) {
            validateForm = false;
            editErrors["OwnerName"] = "Owner Name cannot be empty";
        } else {
            editErrors["OwnerName"] = "";
        }

        if (inputFields[1] && !inputFields[1].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["OwnerName"] = "Please provide a Owner Name.";
        }

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["SlotID"] = "Slot Id field cannot be empty";
        } else {
            editErrors["SlotID"] = "";
        }

        if (inputFields[3] && !inputFields[3].match(/^\d+$/)) {
            validateForm = false;
            editErrors["SlotID"] = "Please provide a valid Slot ID.";
        }

        if (!inputFields[4]) {
            validateForm = false;
            editErrors["ManagerName"] = "Manager Name field cannot be empty";
        } else {
            editErrors["ManagerName"] = "";
        }

        if (inputFields[4] && !inputFields[4].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ManagerName"] = "Please provide a Manager Name.";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["ApartmentType"]) {
            validateForm = false;
            errors["ApartmentType"] = "Apartment Type cannot be empty";
        } else {
            errors["ApartmentType"] = "";
        }

        if (inputFields["ApartmentType"] && !inputFields["ApartmentType"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["ApartmentType"] = "Please provide a valid Apartment Type.";
        }

        if (!inputFields["OwnerName"]) {
            validateForm = false;
            errors["OwnerName"] = "Owner Name cannot be empty";
        } else {
            errors["OwnerName"] = "";
        }

        if (inputFields["OwnerName"] && !inputFields["OwnerName"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["OwnerName"] = "Please provide a Owner Name.";
        }

        if (!inputFields["EmailID"]) {
            validateForm = false;
            errors["EmailID"] = "EmailID field cannot be empty";
        } else {
            errors["EmailID"] = "";
        }

        if (inputFields["EmailID"] && !inputFields["EmailID"].match(/[^\s]*@[a-zA-Z0-9.-]*/i)) {
            validateForm = false;
            errors["EmailID"] = "Please check provided Email Id.";
        }

        if (!inputFields["SlotID"]) {
            validateForm = false;
            errors["SlotID"] = "Slot Id field cannot be empty";
        } else {
            errors["SlotID"] = "";
        }

        if (inputFields["SlotID"] && !inputFields["SlotID"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["SlotID"] = "Please provide a valid Slot ID.";
        }

        if (!inputFields["ManagerName"]) {
            validateForm = false;
            errors["ManagerName"] = "Manager Name field cannot be empty";
        } else {
            errors["ManagerName"] = "";
        }

        if (inputFields["ManagerName"] && !inputFields["ManagerName"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ManagerName"] = "Please provide a Manager Name.";
        }

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.dialogBoxPopup();
        console.log("inside handle create action data")
    }


    editService = (e) => {
        if (this.handleEditFormValidation()) {
            this.dialogBoxPopup();
            let handleAPIEditFlag = true
            this.setState({handleAPIEditFlag: handleAPIEditFlag})
            this.setState({ editAction: false })
        } else {
            console.log("inside edit service errrors", this.state.editErrors)
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

    componentDidMount() {
        // this.props.setRole("");
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
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

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", data)

        let createDataEdit = [{
            "ApartmentType": "",
            "OwnerName": "",
            "EmailID": "",
            "SlotID": "",
            "ManagerName": "",
        }]
        this.setState({ createAction: false })
        this.setState({ createData: createDataEdit })
    };


    render() {

        let data =  {
            'aptType': this.state.inputFields["ApartmentType"],
            'owner_name': this.state.inputFields['OwnerName'],
            'email':this.state.inputFields['EmailID'],
            'slotid':this.state.inputFields['SlotID'],
            'manager_name':this.state.inputFields['ManagerName']
        }

        let createPayload = {
            'aptType':this.state.createData.ApartmentType,
            'owner_name':this.state.createData.OwnerName,
            'email':this.state.createData.EmailID,
            'slotid':this.state.createData.SlotID,
            'manager_name':this.state.createData.ManagerName
        }

        let tableData = "";
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.aptType}</td>
                <td>{obj.owner_name}</td>
                <td>{obj.email}</td>
                <td>{obj.slotid}</td>
                <td>{obj.manager_name}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        return (
            <>
                <div class="container">
                    <h2>Parking Allotment</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Apartmnet Type</th>
                            <th>Owner Name</th>
                            <th>Email ID</th>
                            <th>Slot ID</th>
                            <th>Manager Name</th>
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
                                <label>Enter Apartment Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][0]}
                                    onChange={this.handleInputChange.bind(this, "aptType")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ApartmentType"]}</span><br /></>}
                                <label>Enter Owner Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][1]}
                                    onChange={this.handleInputChange.bind(this, "owner_name")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["OwnerName"]}</span><br /></>}
                                <label>Enter Slot Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "slotid")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["SlotID"]}</span><br /></>}
                                <label>Enter Manager Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][4]}
                                    onChange={this.handleInputChange.bind(this, "manager_name")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ManagerName"]}</span><br /></>}
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
                                <label>Enter Apartment Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ApartmentType}
                                    onChange={this.handleCreate.bind(this, "ApartmentType")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ApartmentType"]}</span><br /></>}
                                <label>Enter Owner Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.OwnerName}
                                    onChange={this.handleCreate.bind(this, "OwnerName")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["OwnerName"]}</span><br /></>}
                                <label>Enter Email Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.EmailID}
                                    onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["EmailID"]}</span><br /></>}
                                <label>Enter Slot Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.SlotID}
                                    onChange={this.handleCreate.bind(this, "SlotID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["SlotID"]}</span><br /></>}
                                <label>Enter Manager Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.ManagerName}
                                    onChange={this.handleCreate.bind(this, "ManagerName")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["ManagerName"]}</span><br /></>}
                            </form>
                            <button onClick={this.createSecurity.bind(this)}>
                                Create
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "BparkingAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="BparkingCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "BparkingDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "BparkingEditAPI" responseData = {this.getEditResponseData} />}
                </div>
            </>
        );
    }
}

export default Parking;