import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class HandleRequest extends Component {

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
                "reqid":"",
                "vname":"",
                "email":"",
                "phnumber":"",
                "incidentType":"",
                "query":"",
                "status":"",
            }],
            editTableData: [{
                "reqid":"",
                "vname":"",
                "email":"",
                "phnumber":"",
                "incidentType":"",
                "query":"",
                "status":"",
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
        console.log("get response data function in visitor manager handle request", data)

        let createDataEdit = [{
            "reqid":"",
            "vname":"",
            "email":"",
            "phnumber":"",
            "incidentType":"",
            "query":"",
            "status":"",
        }]
        this.setState({ createAction: false })
        this.setState({ createData: createDataEdit })
    };

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["status"] = "Status field cannot be empty";
        } else {
            editErrors["status"] = "";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["reqid"]) {
            validateForm = false;
            errors["reqid"] = "Request ID cannot be empty";
        } else {
            errors["reqid"] = "";
        }

        if (!inputFields["vname"]) {
            validateForm = false;
            errors["vname"] = "Visitor Name field cannot be empty";
        } else {
            errors["vname"] = "";
        }

        if (!inputFields["email"]) {
            validateForm = false;
            errors["email"] = "Email ID field cannot be empty";
        } else {
            errors["email"] = "";
        }

        if (!inputFields["phnumber"]) {
            validateForm = false;
            errors["phnumber"] = "Contact Number field cannot be empty";
        } else {
            errors["phnumber"] = "";
        }

        if (!inputFields["incidentType"]) {
            validateForm = false;
            errors["incidentType"] = "Incident Type field cannot be empty";
        } else {
            errors["incidentType"] = "";
        }

        if (!inputFields["query"]) {
            validateForm = false;
            errors["query"] = "Query field cannot be empty";
        } else {
            errors["query"] = "";
        }

        if (!inputFields["status"]) {
            validateForm = false;
            errors["status"] = "Status field cannot be empty";
        } else {
            errors["status"] = "";
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
            
            this.dialogBoxPopup();
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

        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", flag)

        let handleAPICreateFlag = false
        this.setState({handleAPICreateFlag: handleAPICreateFlag})
        console.log("handleAPICreateFlag value", this.state.handleAPICreateFlag)
        console.log("get response data function in security manager staff", flag)
    }


    render() {

        let data =  {
            'reqid':this.state.inputFields["reqid"],
            'vname':this.state.inputFields["vname"],
            'email':this.state.inputFields["email"],
            'phnumber':this.state.inputFields["phnumber"],
            'incidentType':this.state.inputFields["incidentType"],
            'query':this.state.inputFields["query"],
            'status':this.state.inputFields["status"]
        }

        let tableData="";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="10">No Records Found</td></tr>
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
                <td>{obj.status}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        let createPayload = {
            'reqid':this.state.createData.reqid,
            'vname':this.state.createData.vname,
            'email':this.state.createData.email,
            'phnumber':this.state.createData.phnumber,
            'incidentType':this.state.createData.incidentType,
            'query':this.state.createData.query,
            'status':this.state.createData.status
        }

        return (
            <>
                <div class="container">
                    <h2>Handle Requests</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
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
                            <th>Status</th>
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
                                <label>Enter Status:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "status")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["status"]}</span><br /></>}
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
                                <label>Enter Request ID:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.reqid}
                                    onChange={this.handleCreate.bind(this, "reqid")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["reqid"]}</span><br /></>}
                                <label>Enter Visitor Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.vname}
                                    onChange={this.handleCreate.bind(this, "vname")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["vname"]}</span><br /></>}
                                <label>Enter Email ID:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.email}
                                    onChange={this.handleCreate.bind(this, "email")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["email"]}</span><br /></>}
                                <label>Enter Contact Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.phnumber}
                                    onChange={this.handleCreate.bind(this, "phnumber")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["phnumber"]}</span><br /></>}
                                <label>Enter Incident Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.incidentType}
                                    onChange={this.handleCreate.bind(this, "incidentType")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["incidentType"]}</span><br /></>}
                                <label>Enter Query:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.query}
                                    onChange={this.handleCreate.bind(this, "query")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["query"]}</span><br /></>}
                                <label>Enter Status:</label><br />
                                <input type="date"
                                    defaultValue={this.state.createData.status}
                                    onChange={this.handleCreate.bind(this, "status")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["status"]}</span><br /></>}
                            </form>
                            <button onClick={this.createRequest.bind(this)}>
                                Create Request
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "visitorRequestAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="visitorRequestCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "visitorRequestDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "visitorRequestEditAPI" responseData = {this.getEditResponseData} />}
                </div>
            </>
        );
    }
}

export default HandleRequest;