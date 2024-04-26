import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../../HandleAPI';

class ServicesRequested extends Component {

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
                "ServiceRequested": "",
                "ResidentName": "",
                "EmailID": "",
                "ApartmentNumber": "",
                "Status": "",
            }],
            editTableData: [{
                "ServiceRequested": "",
                "ResidentName": "",
                "EmailID": "",
                "ApartmentNumber": "",
                "Status": "",
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
            "ServiceRequested": "",
            "ResidentName": "",
            "EmailID": "",
            "ApartmentNumber": "",
            "Status": "",
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
            editErrors["ServiceRequested"] = "Service Requested cannot be empty";
        } else {
            editErrors["ServiceRequested"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ServiceRequested"] = "Please provide a valid number.";
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

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["ApartmentNumber"] = "Apartment Number field cannot be empty";
        } else {
            editErrors["ApartmentNumber"] = "";
        }

        if (inputFields[3] && !inputFields[3].match(/^\d+$/)) {
            validateForm = false;
            editErrors["ApartmentNumber"] = "Please provide a valid number.";
        }

        if (!inputFields[4]) {
            validateForm = false;
            editErrors["Status"] = "Status field cannot be empty";
        } else {
            editErrors["Status"] = "";
        }
        if (inputFields[4] && !inputFields[4].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["Status"] = "Please provide a valid number.";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["ServiceRequested"]) {
            validateForm = false;
            errors["ServiceRequested"] = "Service Requested cannot be empty";
        } else {
            errors["ServiceRequested"] = "";
        }

        if (inputFields["ServiceRequested"] && !inputFields["ServiceRequested"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["ServiceRequested"] = "Please provide a valid number.";
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

        if (!inputFields["ApartmentNumber"]) {
            validateForm = false;
            errors["ApartmentNumber"] = "Apartment Number field cannot be empty";
        } else {
            errors["ApartmentNumber"] = "";
        }

        if (inputFields["ApartmentNumber"] && !inputFields["ApartmentNumber"].match(/^\d+$/)) {
            validateForm = false;
            errors["ApartmentNumber"] = "Please provide a valid number.";
        }

        if (!inputFields["Status"]) {
            validateForm = false;
            errors["Status"] = "Status field cannot be empty";
        } else {
            errors["Status"] = "";
        }

        if (inputFields["Status"] && !inputFields["Status"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["Status"] = "Please provide a valid number.";
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
            'service': this.state.inputFields["ServiceRequested"],
            'name': this.state.inputFields['ResidentName'],
            'email':this.state.inputFields['EmailID'],
            'aptnum':this.state.inputFields['ApartmentNumber'],
            'status':this.state.inputFields['Status']
        }

        let createPayload = {
            'service': this.state.createData.ServiceRequested,
            'name': this.state.createData.ResidentName,
            'email':this.state.createData.EmailID,
            'aptnum':this.state.createData.ApartmentNumber,
            'status':this.state.createData.Status,
        }

        let tableData = "";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="7">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{obj.service}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.aptnum}</td>
                    <td>{obj.status}</td>
                    <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                        <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                    </td>
                </tr>
            })
        }

        return (
            <>
                <div class="container">
                    <h2>Services Requested</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Service Requested</th>
                        <th>Resident Name</th>
                        <th>Email Id</th>
                        <th>Apartment Number</th>
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
                            <label>Enter Service Requested:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][0]}
                                onChange={this.handleInputChange.bind(this, "service")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ServiceRequested"]}</span><br /></>}
                            <label>Enter Resident Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][1]}
                                onChange={this.handleInputChange.bind(this, "name")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ResidentName"]}</span><br /></>}
                            <label>Enter Apartment Number:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][3]}
                                onChange={this.handleInputChange.bind(this, "aptnum")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ApartmentNumber"]}</span><br /></>}
                            <label>Provide Status:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][4]}
                                onChange={this.handleInputChange.bind(this, "status")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["Status"]}</span><br /></>}
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
                            <label>Enter Service Requested:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.ServiceRequested}
                                onChange={this.handleCreate.bind(this, "ServiceRequested")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["ServiceRequested"]}</span><br /></>}
                            <label>Enter Resident Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.ResidentName}
                                onChange={this.handleCreate.bind(this, "ResidentName")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["ResidentName"]}</span><br /></>}
                            <label>Enter Email ID:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.EmailID}
                                onChange={this.handleCreate.bind(this, "EmailID")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["EmailID"]}</span><br /></>}
                            <label>Enter Apartment Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.ApartmentNumber}
                                onChange={this.handleCreate.bind(this, "ApartmentNumber")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["ApartmentNumber"]}</span><br /></>}
                            <label>Provide Status:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.Status}
                                onChange={this.handleCreate.bind(this, "Status")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["Status"]}</span><br /></>}
                        </form>
                        <button onClick={this.createService.bind(this)}>
                            Create Resident
                        </button>&nbsp;
                        <button onClick={this.dialogBoxPopup.bind(this)}>
                            Cancel
                        </button>
                    </Modal>
                )}
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "cabinserviceAPI" responseData = {this.getResponseData}/>}
                {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="cabinserviceCreateAPI" responseData = {this.getCreateResponseData}/>}
                {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "cabinserviceDeleteAPI" responseData = {this.getDeleteResponseData} />}
                {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "cabinserviceEditAPI" responseData = {this.getEditResponseData} />}
            </>
        );
    }
}

export default ServicesRequested;