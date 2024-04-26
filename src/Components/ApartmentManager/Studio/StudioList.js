import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../../HandleAPI';

class StudioList extends Component {

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
                "StudioNumber": "",
                "RoomNumber": "",
                "ResidentName": "NA",
                "EmailID": "NA",
                "LeaseStartDate": "NA",
                "LeaseEndDate": "NA",
            }],
            editTableData: [{
                "StudioNumber": "",
                "RoomNumber": "",
                "ResidentName": "",
                "EmailID": "",
                "LeaseStartDate": "",
                "LeaseEndDate": "",
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
            "StudioNumber": "",
            "RoomNumber": "",
            "ResidentName": "NA",
            "EmailID": "NA",
            "LeaseStartDate": "NA",
            "LeaseEndDate": "NA",
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
            editErrors["StudioNumber"] ="Studio Number cannot be empty";
        } else {
            editErrors["StudioNumber"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            editErrors["StudioNumber"] = "Please provide a valid number.";
        }

        if (!inputFields[1]) {
            validateForm = false;
            editErrors["RoomNumber"] = "Room Number field cannot be empty";
        } else {
            editErrors["RoomNumber"] = "";
        }

        if (inputFields[1] && !inputFields[1].match(/^\d+$/)) {
            validateForm = false;
            editErrors["RoomNumber"] = "Please provide a valid number.";
        }

        if (!inputFields[2]) {
            validateForm = false;
            editErrors["ResidentName"] = "Resident Name field cannot be empty";
        } else {
            editErrors["ResidentName"] = "";
        }

        if (inputFields[2] && !inputFields[2].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["ResidentName"] = "Please provide a ResidentName.";
        }

        if (!inputFields[4]) {
            validateForm = false;
            editErrors["LeaseStartDate"] = "Lease Start Date field cannot be empty";
        } else {
            editErrors["LeaseStartDate"] = "";
        }

        if (!inputFields[5]) {
            validateForm = false;
            editErrors["LeaseEndDate"] = "Lease End Date field cannot be empty";
        } else {
            editErrors["LeaseEndDate"] = "";
        }

        if (inputFields[4] && inputFields[5] && inputFields[4]> inputFields[5]) {
            validateForm = false;
            editErrors["LeaseEndDate"] = "Lease End Date cannot be greater than lease start date";
        } 

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["StudioNumber"]) {
            validateForm = false;
            errors["StudioNumber"] = "Studio Number cannot be empty";
        } else {
            errors["StudioNumber"] = "";
        }

        if (inputFields["StudioNumber"] && !inputFields["StudioNumber"].match(/^[A-Za-z0-9]+$/)) {
            validateForm = false;
            errors["StudioNumber"] = "Please provide a valid number.";
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

        if (!inputFields["LeaseStartDate"]) {
            validateForm = false;
            errors["LeaseStartDate"] = "Lease Start Date field cannot be empty";
        } else {
            errors["LeaseStartDate"] = "";
        }

        if (!inputFields["LeaseEndDate"]) {
            validateForm = false;
            errors["LeaseEndDate"] = "Lease End Date field cannot be empty";
        } else {
            errors["LeaseEndDate"] = "";
        }

        if (inputFields["LeaseStartDate"] && inputFields["LeaseEndDate"] && inputFields["LeaseStartDate"]> inputFields["LeaseEndDate"]) {
            validateForm = false;
            errors["LeaseEndDate"] = "Lease End Date cannot be greater than lease start date";
        } 

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.dialogBoxPopup();
    }

    createResident = (e) => {
        if (this.handleFormValidation()) {
            // let tableData = [...this.state.tableData, this.state.createData]
            // this.setState({ tableData });
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


    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
    }

    render() {

        let data =  {
            'apttype': this.state.inputFields["StudioNumber"],
            'roomnum': this.state.inputFields['RoomNumber'],
            'name':this.state.inputFields['ResidentName'],
            'email':this.state.inputFields['EmailID'],
            'lstartdate':this.state.inputFields['LeaseStartDate'],
            'lenddate':this.state.inputFields['LeaseEndDate']
        }

        let createPayload = {
            'apttype': this.state.createData.StudioNumber,
            'roomnum': this.state.createData.RoomNumber,
            'name':this.state.createData.ResidentName,
            'email':this.state.createData.EmailID,
            'lstartdate':this.state.createData.LeaseStartDate,
            'lenddate':this.state.createData.LeaseEndDate
        }

        let tableData = "";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.apttype}</td>
                <td>{obj.roomnum}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.lstartdate}</td>
                <td>{obj.lenddate}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.email)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        return (
            <>
                <div class="container">
                    <h2>Studio Resident List</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Apartment Type</th>
                            <th>Room Number</th>
                            <th>Resident Name</th>
                            <th>Email ID</th>
                            <th>Lease Start Date</th>
                            <th>Lease End Date</th>
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
                                <label>Enter Studio Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][0]}
                                    onChange={this.handleInputChange.bind(this, "apttype")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["StudioNumber"]}</span><br /></>}
                                <label>Enter Room Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][1]}
                                    onChange={this.handleInputChange.bind(this, "roomnum")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["RoomNumber"]}</span><br /></>}
                                <label>Enter Resident Name:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][2]}
                                    onChange={this.handleInputChange.bind(this, "name")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["ResidentName"]}</span><br /></>}
                                {/* <label>Enter Email ID:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata].EmailID}
                                    onChange={this.handleInputChange.bind(this, "EmailID")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["EmailID"]}</span><br /></>} */}
                                <label>Enter Lease Start Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.tableData[this.state.editdata][4]}
                                    onChange={this.handleInputChange.bind(this, "lstartdate")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["LeaseStartDate"]}</span><br /></>}
                                <label>Enter Lease End Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.tableData[this.state.editdata][5]}
                                    onChange={this.handleInputChange.bind(this, "lenddate")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["LeaseEndDate"]}</span><br /></>}
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
                                <label>Enter Studio Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.StudioNumber}
                                    onChange={this.handleCreate.bind(this, "StudioNumber")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["StudioNumber"]}</span><br /></>}
                                <label>Enter Room Number:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.RoomNumber}
                                    onChange={this.handleCreate.bind(this, "RoomNumber")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["RoomNumber"]}</span><br /></>}
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
                                <label>Enter Lease Start Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.createData.LeaseStartDate}
                                    onChange={this.handleCreate.bind(this, "LeaseStartDate")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["LeaseStartDate"]}</span><br /></>}
                                <label>Enter Lease End Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.createData.LeaseEndDate}
                                    onChange={this.handleCreate.bind(this, "LeaseEndDate")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["LeaseEndDate"]}</span><br /></>}
                            </form>
                            <button onClick={this.createResident.bind(this)}>
                                Create Resident
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "studioreslistAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="studioreslistCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "studioreslistDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "studioreslistEditAPI" responseData = {this.getEditResponseData} />}
                </div>
            </>
        )
    }
}

export default StudioList;