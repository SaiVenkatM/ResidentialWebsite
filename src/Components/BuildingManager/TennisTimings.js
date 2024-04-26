import React, { Component } from "react";
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class TennisTimings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editAction: false,
            createAction: false,
            deleteAction: false,
            showModalPopup: false,
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
                "name": "",
                "data":""
            }],
            editTableData: [{
                "name": "",
                "data":""
            }],
            editdata: "",
        }

        this.handleEditAction = this.handleEditAction.bind(this);
        this.handleDeleteAction = this.handleDeleteAction.bind(this);
        this.handleCreateAction = this.handleCreateAction.bind(this);
        this.modalPopup = this.modalPopup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.editService = this.editService.bind(this);
        this.handleRadioSelectedValue = this.handleRadioSelectedValue.bind(this);
    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields["data"]) {
            validateForm = false;
            editErrors["data"] = "Cannot be empty";
        } else {
            editErrors["data"] = "";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if(!inputFields["name"]){
            validateForm = false;
            errors["name"] = "Cannot be empty";
        } else{
            errors["name"] = "";
        }

        if (!inputFields["data"]) {
            validateForm = false;
            errors["data"] = "Cannot be empty";
        } else {
            errors["data"] = "";
        }

        this.setState({ errors });
        return validateForm;
    }

    handleCreateAction = (e) => {
        this.setState({ createAction: true })
        this.modalPopup();
        console.log("inside handle create action data")
    }

    createRequest = (e) => {
        if (this.handleFormValidation()) {
            // let tableData = [...this.state.tableData, this.state.createData]
            // this.setState({ tableData });
            this.modalPopup();
            
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
            this.modalPopup();
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

    handleEditAction = (e) => {
        this.setState({ editAction: true })
        this.modalPopup();
    }

    handleDeleteAction = (e) => {
        // let newTableData = this.state.tableData;
        // newTableData.splice(this.state.editdata , 1);
        // this.setState({ tableData: newTableData });
        // this.setState({ editdata: "1" })
        let handleAPIDeleteFlag = true
        this.setState({handleAPIDeleteFlag: handleAPIDeleteFlag})
    }

    modalPopup = () => {
        this.setState({ showModalPopup: !this.state.showModalPopup });
    }

    handleInputChange = (val, e) => {
        let tableData = this.state.tableData;
        tableData[this.state.editdata][val] = e.target.value;
        this.setState({ tableData })
        console.log("inside handle input change", tableData);
    }

    handleRadioSelectedValue = (val, e) => {
        this.setState({ editdata: val });
        this.setState({deleteVal:val});
        console.log("inside handle radio selected value function", this.state.editdata);
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
            "data": "",
            "name":""
        }]
        this.setState({ createAction: false })
        this.setState({ createData: createDataEdit })
    };

    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
        
    }

    render() {

        let data =  {
            'name': this.state.inputFields["name"],
            'data': this.state.inputFields['data']
        }

        let createPayload = {
            'name':this.state.createData.name,
            'data':this.state.createData.data,
        }

        let timingsData="";

        if(this.state.tableData  === "No records present"){
            timingsData = <center>No Records Found</center>
        }else{
            timingsData = this.state.tableData.map((obj, index) => {
            return <center>
                {console.log("inside handle radio selected value function", this.state.editdata, index, obj.data)}
                <span><input type="radio" value={index + 1} checked={this.state.editdata === (index)} onChange={this.handleRadioSelectedValue.bind(this, index)} /></span>
                <span>{obj.data}</span><br /><br />
            </center>
        })}

        return (
            <>
                <div class="container">
                    <h2>Garden Timings</h2>
                </div>
                <br /><br />
                <div><br />
                    {timingsData}
                    <center ><button class="timings-button" onClick={this.handleCreateAction.bind(this)}><i class='fa fa-plus'></i></button>&nbsp;
                        &nbsp;<button class="timings-button" onClick={this.handleEditAction.bind(this)}><i class='fa fa-edit'></i></button>&nbsp;
                        <button class="timings-button" onClick={this.handleDeleteAction.bind(this)}><i class='fa fa-trash-o'></i></button>
                    </center><br />
                </div>
                {this.state.editAction && (
                    <Modal
                        isOpen={this.state.showModalPopup}
                        onRequestClose={this.modalPopup.bind(this)}
                        className="boxstyling"
                    >
                        <form>
                            <label>Enter Timing Data:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata].data}
                                onChange={this.handleInputChange.bind(this, "data")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["data"]}</span><br /></>}
                        </form>
                        <button onClick={this.editService.bind(this)}>
                            Submit
                        </button>&nbsp;
                    </Modal>
                )}
                {this.state.createAction && (
                    <Modal
                        isOpen={this.state.showModalPopup}
                        onRequestClose={this.modalPopup.bind(this)}
                        className="boxstyling"
                    >
                        <form>
                        <label>Enter Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.name}
                                onChange={this.handleCreate.bind(this, "name")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["name"]}</span><br /></>}
                            <label>Enter Timing Data:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.data}
                                onChange={this.handleCreate.bind(this, "data")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["data"]}</span><br /></>}
                        </form>
                        <button onClick={this.createRequest.bind(this)}>
                            Create
                        </button> &nbsp;
                        <button onClick={this.modalPopup.bind(this)}>
                            Cancel
                        </button>
                    </Modal>
                )}
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="tennisTimings" responseData = {this.getResponseData}/>}
                {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="tennisTimingsCreate" responseData = {this.getCreateResponseData}/>}
                {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.tableData[this.state.editdata].name} funcName = "tennisTimingsDelete" responseData = {this.getDeleteResponseData} />}
                {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "tennisTimingsEdit" responseData = {this.getEditResponseData} />}
            </>
        );
    }
}

export default TennisTimings;