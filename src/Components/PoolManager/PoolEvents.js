import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class PoolEvents extends Component {

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
                "PoolEvents": "",
                "EventID": "",
                "MatchDate": "",
                "Time": "",
                "Status": "",
            }],
            editTableData: [{
                "PoolEvents": "",
                "EventID": "",
                "MatchDate": "",
                "Time": "",
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
        console.log("table data",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in garden events", data)

        let createDataEdit = [{
            "PoolEvents": "",
            "EventID": "",
            "MatchDate": "",
            "Time": "",
            "Status": "",
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
            editErrors["PoolEvents"] = "Garden Events cannot be empty";
        } else {
            editErrors["PoolEvents"] = "";
        }

        if (inputFields[0] && !inputFields[0].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["PoolEvents"] = "Please provide a valid PoolEvents.";
        }

        if (!inputFields[2]) {
            validateForm = false;
            editErrors["MatchDate"] = "Match Date field cannot be empty";
        } else {
            editErrors["MatchDate"] = "";
        }


        // if (inputFields[2] && !inputFields[2].match(/^\d+$/)) {
        //     validateForm = false;
        //     editErrors["MatchDate"] = "Please provide a valid Match Date.";
        // }

        if (!inputFields[3]) {
            validateForm = false;
            editErrors["Time"] = "Time field cannot be empty";
        } else {
            editErrors["Time"] = "";
        }

        // if (inputFields[3] && !inputFields[3].match(/^[A-Za-z0-9]+$/)) {
        //     validateForm = false;
        //     editErrors["Time"] = "Please provide a valid Time.";
        // }


        if (!inputFields[4]) {
            validateForm = false;
            editErrors["Status"] = "Status field cannot be empty";
        } else {
            editErrors["Status"] = "";
        }

        if (inputFields[4] && !inputFields[4].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            editErrors["Status"] = "Please provide a valid Status.";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["PoolEvents"]) {
            validateForm = false;
            errors["PoolEvents"] = "Pool Events cannot be empty";
        } else {
            errors["PoolEvents"] = "";
        }

        if (inputFields["PoolEvents"] && !inputFields["PoolEvents"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["PoolEvents"] = "Please provide a PoolEvent.";
        }

        if (!inputFields["EventID"]) {
            validateForm = false;
            errors["EventID"] = "EventID field cannot be empty";
        } else {
            errors["EventID"] = "";
        }

        if (inputFields["EventID"] && !inputFields["EventID"].match(/^\d+$/)) {
            validateForm = false;
            errors["EventID"] = "Please provide a valid number.";
        }

        if (!inputFields["MatchDate"]) {
            validateForm = false;
            errors["MatchDate"] = "Match Date field cannot be empty";
        } else {
            errors["MatchDate"] = "";
        }

        // if (inputFields["MatchDate"] && !inputFields["MatchDate"].match(/^\d+$/)) {
        //     validateForm = false;
        //     errors["MatchDate"] = "Please provide a valid number.";
        // }

        if (!inputFields["Time"]) {
            validateForm = false;
            errors["Time"] = "Time field cannot be empty";
        } else {
            errors["Time"] = "";
        }

        // if (inputFields["Time"] && !inputFields["Time"].match(/^[A-Za-z0-9]+$/)) {
        //     validateForm = false;
        //     errors["Time"] = "Please provide a valid Time.";
        // }

        if (!inputFields["Status"]) {
            validateForm = false;
            errors["Status"] = "Status field cannot be empty";
        } else {
            errors["Status"] = "";
        }

        if (inputFields["Status"] && !inputFields["Status"].match(/^[A-Za-z]+$/)) {
            validateForm = false;
            errors["Status"] = "Please provide a Status.";
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
        this.setState({ createData });
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
        console.log("flag in delete response data",flag)

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

    render() {

        let data =  {
            'event': this.state.inputFields["PoolEvents"],
            'eventid': this.state.inputFields['EventID'],
            'date':this.state.inputFields['MatchDate'],
            'time':this.state.inputFields['Time'],
            'status':this.state.inputFields['Status'],
        }

        let tableData = "";
        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="8">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.event}</td>
                <td>{obj.eventid}</td>
                <td>{obj.date}</td>
                <td>{obj.time}</td>
                <td>{obj.status}</td>
                <td> &nbsp;<button onClick={this.handleEditAction.bind(this, index)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDeleteAction.bind(this, obj.eventid)}><i class='fa fa-trash-o'></i></button>
                </td>
            </tr>
        })}

        let createPayload = {
            'event':this.state.createData.PoolEvents,
            'eventid':this.state.createData.EventID,
            'date':this.state.createData.MatchDate,
            'time':this.state.createData.Time,
            'status':this.state.createData.Status
        }

        return (
            <>
                <div class="container">
                    <h2>Pool Events</h2>
                </div>
                <div class="div">
                    <button onClick={this.handleCreateAction.bind(this)}>Create &nbsp;<i class='fa fa-plus'></i></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Pool Events</th>
                            <th>Event ID</th>
                            <th>Match Date</th>
                            <th>Time</th>
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
                                <label>Enter Pool Events:</label><br />
                                <input type="text"
                                    defaultValue={this.state.tableData[this.state.editdata][0]}
                                    onChange={this.handleInputChange.bind(this, "event")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["PoolEvents"]}</span><br /></>}
                                <label>Enter Match Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.tableData[this.state.editdata][2]}
                                    onChange={this.handleInputChange.bind(this, "date")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["MatchDate"]}</span><br /></>}
                                <label>Enter Time:</label><br />
                                <input type="time"
                                    defaultValue={this.state.tableData[this.state.editdata][3]}
                                    onChange={this.handleInputChange.bind(this, "time")} /><br />
                                {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["Time"]}</span><br /></>}
                                <label>Enter Status:</label><br />
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
                                <label>Enter Pool Events:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.PoolEvents}
                                    onChange={this.handleCreate.bind(this, "PoolEvents")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["PoolEvents"]}</span><br /></>}
                                <label>Enter Event Id:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.EventID}
                                    onChange={this.handleCreate.bind(this, "EventID")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["EventID"]}</span><br /></>}
                                <label>Enter Match Date:</label><br />
                                <input type="date"
                                    defaultValue={this.state.createData.MatchDate}
                                    onChange={this.handleCreate.bind(this, "MatchDate")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["MatchDate"]}</span><br /></>}
                                <label>Enter Time:</label><br />
                                <input type="time"
                                    defaultValue={this.state.createData.Time}
                                    onChange={this.handleCreate.bind(this, "Time")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Time"]}</span><br /></>}
                                <label>Enter Status:</label><br />
                                <input type="text"
                                    defaultValue={this.state.createData.Status}
                                    onChange={this.handleCreate.bind(this, "Status")} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["Status"]}</span><br /></>}
                            </form>
                            <button onClick={this.createRequest.bind(this)}>
                                Create
                            </button> &nbsp;
                            <button onClick={this.dialogBoxPopup.bind(this)}>
                                Cancel
                            </button>
                        </Modal>
                    )}
                    {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "PoolEventsAPI" responseData = {this.getResponseData}/>}
                    {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="PoolEventsCreateAPI" responseData = {this.getCreateResponseData}/>}
                    {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.deleteVal} funcName = "PoolEventsDeleteAPI" responseData = {this.getDeleteResponseData} />}
                    {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "PoolEventsEditAPI" responseData = {this.getEditResponseData} />}
                </div>
            </>
        );
    }
}

export default PoolEvents;