import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class GardenStaffList extends Component {

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
                "Name": "",
                "EmailId": "",
                "WorkerType": "",
                "GardenName": "",
                "Schedule": "",
            }],
            editTableData: [{
                "Name": "",
                "EmailId": "",
                "WorkerType": "",
                "GardenName": "",
                "Schedule": "",
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
        console.log("table data in manage visitors",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in manage visitors page", data)

        let createDataEdit = [{
            "Name": "",
            "EmailId": "",
            "WorkerType": "",
            "GardenName": "",
            "Schedule": "",
            }]
            this.setState({ createAction: false })
            this.setState({ createData: createDataEdit })
    };


    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[0]) {
            validateForm = false;
            editErrors["Name"] = "Name cannot be empty";
        } else {
            editErrors["Name"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["Name"] = "Please provide a valid Name.";
        }


        if (!inputFields[2]) {
            validateForm = false;
            editErrors["WorkerType"] = "WorkerType  field cannot be empty";
        } else {
            editErrors["WorkerType"] = "";
        }

        if (inputFields[2] && !inputFields[2].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["WorkerType"] = "Please provide a valid Managing Worker Type.";
        }

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["GardenName"] = "GardenName field cannot be empty";
        } else {
            editErrors["GardenName"] = "";
        }

        if (inputFields[3] && !inputFields[3].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["GardenName"] = "Please provide a valid GardenName.";
        }

        if (!inputFields[4]) {
            validateForm = false;
            editErrors["Schedule"] = "Schedule field cannot be empty";
        } else {
            editErrors["Schedule"] = "";
        }

        if (inputFields[4] && !inputFields[4].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["Schedule"] = "Please provide a valid Schedule.";
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
            errors["Name"] = "Please provide a Name.";
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

        if (!inputFields["WorkerType"]) {
            validateForm = false;
            errors["WorkerType"] = "WorkerType field cannot be empty";
        } else {
            errors["WorkerType"] = "";
        }

        if (inputFields["WorkerType"] && !inputFields["WorkerType"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["WorkerType"] = "Please provide a valid Worker Type.";
        }

        if (!inputFields["GardenName"]) {
            validateForm = false;
            errors["GardenName"] = "GardenName field cannot be empty";
        } else {
            errors["GardenName"] = "";
        }

        if (inputFields["GardenName"] && !inputFields["GardenName"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["GardenName"] = "Please provide a valid Garden Name.";
        }

        if (!inputFields["Schedule"]) {
            validateForm = false;
            errors["Schedule"] = "Schedule field cannot be empty";
        } else {
            errors["Schedule"] = "";
        }

        if (inputFields["Schedule"] && !inputFields["Schedule"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["Schedule"] = "Please provide a valid Schedule.";
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

    getDeleteResponseData = (flag) => {
        if(flag !== this.state.deleteFlag){
            this.setState({ deleteFlag: flag });
        }
        console.log("flag in create response data",flag)

        if(flag){
            alert("Couldn't delete the record!!!")
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
        console.log("here");
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
        // this.props.setRole("");
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }

    render() {

        let data =  {
            'name': this.state.inputFields["Name"],
            'email':this.state.inputFields['EmailID'],
            'workerType':this.state.inputFields['WorkerType'],
            'gardenName':this.state.inputFields['GardenName'],
            'schedule':this.state.inputFields['Schedule']
        }

        let tableData = "";
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.workerType}</td>
                <td>{obj.gardenName}</td>
                <td>{obj.schedule}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        let createPayload = {
            
            'name': this.state.createData.Name,
            'email':this.state.createData.EmailID,
            'workerType':this.state.createData.WorkerType,
            'gardenName':this.state.createData.GardenName,
            'schedule':this.state.createData.Schedule,
        }
        

        return (
            <>
                <div class="container">
                    <h2> Garden Staff</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Worker Type</th>
                            <th>Garden Name</th>
                            <th>Schedule</th>
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
                                <label>Enter Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][0]}
                                    onChange={this.handleInputChange.bind(this, "name")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["Name"]}</span><br /></>}
                                <label>Enter Worker Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][2]}
                                    onChange={this.handleInputChange.bind(this, "workerType")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["WorkerType"]}</span><br /></>}
                                <label>Enter Garden Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "gardenName")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["GardenName"]}</span><br /></>}
                                <label>Enter Schedule:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][4]}
                                    onChange={this.handleInputChange.bind(this, "schedule")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["Schedule"]}</span><br /></>}
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
                                    defaultValue={this.state.createData.EmailId}
                                    onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["EmailId"]}</span><br /></>}
                                <label>Enter Worker Type:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.WorkerType}
                                    onChange={this.handleCreate.bind(this, "WorkerType")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["WorkerType"]}</span><br /></>}
                                <label>Enter Garden Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.GardenName}
                                    onChange={this.handleCreate.bind(this, "GardenName")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["GardenName"]}</span><br /></>}
                                <label>Enter Schedule:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.Schedule}
                                    onChange={this.handleCreate.bind(this, "Schedule")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Schedule"]}</span><br /></>}
                            </form>
                            <button onClick={this.createRequest.bind(this)}>
                                Create
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "GardenManagerStaffListAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="GardenManagerStaffListCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "GardenManagerStaffListDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "GardenManagerStaffListEditAPI" responseData = {this.getEditResponseData} />}
                </div>
            </>
        );
    }
}

export default GardenStaffList;