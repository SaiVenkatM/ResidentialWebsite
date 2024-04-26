import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../../HandleAPI';

class ManageServices extends Component {

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
                "ServiceType": "",
                "ServiceHandlerName": "",
                "EmailID": "",
            }],
            editTableData: [{
                "ServiceType": "",
                "ServiceHandlerName": "",
                "EmailID": "",
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
        
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
  
        let createDataEdit = [{
            "ServiceType": "",
            "ServiceHandlerName": "",
            "EmailID": "",
        }]
        this.setState({ createAction: false })
        this.setState({ createData: createDataEdit })
    };

    getEditResponseData = (flag) => {
        if(flag !== this.state.editFlag){
            this.setState({ editFlag: flag });
        }
        
        if(flag){
            alert("Couldn't edit record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})

        let handleAPIEditFlag = false
        this.setState({handleAPIEditFlag: handleAPIEditFlag})
    }

    getDeleteResponseData = (flag) => {
        if(flag !== this.state.deleteFlag){
            this.setState({ deleteFlag: flag });
        }
        
        if(flag){
            alert("Couldn't delete record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})

        let handleAPIDeleteFlag = false
        this.setState({handleAPIDeleteFlag: handleAPIDeleteFlag})
    }

    getCreateResponseData = (flag) => {
        if(flag !== this.state.createFlag){
            this.setState({ createFlag: flag });
        }
        
        if(flag){
            alert("Couldn't create record!!!")
        }

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})

        let handleAPICreateFlag = false
        this.setState({handleAPICreateFlag: handleAPICreateFlag})
    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[0]) {
            validateForm = false;
            editErrors["ServiceType"] = "Service Type cannot be empty";
        } else {
            editErrors["ServiceType"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ServiceType"] = "Please provide a valid ServiceType.";
        }

        if (!inputFields[1]) {
            validateForm = false;
            editErrors["ServiceHandlerName"] = "Service Handler Name field cannot be empty";
        } else {
            editErrors["ServiceHandlerName"] = "";
        }

        if (inputFields[1] && !inputFields[1].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ServiceHandlerName"] = "Please provide a valid number.";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["ServiceType"]) {
            validateForm = false;
            errors["ServiceType"] = "Service Type cannot be empty";
        } else {
            errors["ServiceType"] = "";
        }

        if (inputFields["ServiceType"] && !inputFields["ServiceType"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ServiceType"] = "Please provide a valid ServiceType.";
        }

        if (!inputFields["ServiceHandlerName"]) {
            validateForm = false;
            errors["ServiceHandlerName"] = "Service Handler Name field cannot be empty";
        } else {
            errors["ServiceHandlerName"] = "";
        }

        if (inputFields["ServiceHandlerName"] && !inputFields["ServiceHandlerName"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ServiceHandlerName"] = "Please provide a valid number.";
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

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.dialogBoxPopup();
       
    }

    createService = (e) => {
        if (this.handleFormValidation()) {
            this.dialogBoxPopup();
            
            let handleAPICreateFlag = true
            this.setState({handleAPICreateFlag: handleAPICreateFlag})
        } else {
            let showError = this.state.showError;
            showError = true;
            this.setState({ showError });
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
    }

    componentDidMount() {
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
    }

    render() {

        let data =  {
            'serviceType': this.state.inputFields["ServiceType"],
            'name': this.state.inputFields['ServiceHandlerName'],
            'email':this.state.inputFields['EmailID'],
        }

        let createPayload = {
            'serviceType': this.state.createData.ServiceType,
            'name': this.state.createData.ServiceHandlerName,
            'email':this.state.createData.EmailID
        }

        let tableData = "";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="7">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{obj.serviceType}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                        <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                    </td>
                </tr>
            })
        }

        return (
            <>
                <div class="container">
                    <h2>Manage Services</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Service Type</th>
                        <th>Service Handler Name</th>
                        <th>Email Id</th>
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
                            <label>Enter Service Type:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][0]}
                                onChange={this.handleInputChange.bind(this, "serviceType")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ServiceType"]}</span><br /></>}
                            <label>Enter Service Handler Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][1]}
                                onChange={this.handleInputChange.bind(this, "name")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ServiceHandlerName"]}</span><br /></>}
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
                            <label>Enter Service Type <label className="mandatory-field">*</label>:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.ServiceType}
                                onChange={this.handleCreate.bind(this, "ServiceType")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["ServiceType"]}</span><br /></>}
                            <label>Enter Service Handler Name <label className="mandatory-field">*</label>:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.ServiceHandlerName}
                                onChange={this.handleCreate.bind(this, "ServiceHandlerName")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["ServiceHandlerName"]}</span><br /></>}
                            <label>Enter Email ID <label className="mandatory-field">*</label>:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.EmailID}
                                onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["EmailID"]}</span><br /></>}
                        </form>
                        <button onClick={this.createService.bind(this)}>
                            Create
                        </button>&nbsp;
                        <button onClick={this.dialogBoxPopup.bind(this)}>
                            Cancel
                        </button>
                    </Modal>
                )}
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "cabinmanageserviceAPI" responseData = {this.getResponseData}/>}
                {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="cabinmanageserviceCreateAPI" responseData = {this.getCreateResponseData}/>}
                {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "cabinmanageserviceDeleteAPI" responseData = {this.getDeleteResponseData} />}
                {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "cabinmanageserviceEditAPI" responseData = {this.getEditResponseData} />}
            </>
        );
    }
}

export default ManageServices;
