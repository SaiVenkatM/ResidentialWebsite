import React, { Component } from 'react';
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class RegisterVehicle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editAction: false,
            createAction: false,
            deleteAction: false,
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
            // tableData: [
            //     {
            //         "vehicleMake": "Honda",
            //         "vehicleModel": "Accord",
            //         "vehicleLicense": "ABC1234",
            //         "lastName": "mamillipalli",
            //         "emailID": "gayatri@gmail.com",
            //         "contactNumber": "+18888888888",
            //     },

            // ],
            createData: [{
                "vehicleMake": "",
                "vehicleModel": "",
                "vehicleLicense": "",
                "lastName": "",
                "emailID": "",
                "contactNumber": "",
            }],
            editTableData: [{
                "vehicleMake": "",
                "vehicleModel": "",
                "vehicleLicense": "",
                "lastName": "",
                "emailID": "",
                "contactNumber": "",
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
        this.handleRadioSelectedValue = this.handleRadioSelectedValue.bind(this);

    }

    handleEditFormValidation() {
        let inputFields = this.state.tableData[this.state.editdata];
        let editErrors = this.state.editErrors;
        let validateForm = true;

        if (!inputFields[0]) {
            validateForm = false;
            editErrors["vehicleMake"] = " Vehicle Make Cannot be empty";
        } else {
            editErrors["vehicleMake"] = "";
        }

        if (!inputFields[1]) {
            validateForm = false;
            editErrors["vehicleModel"] = " Vehicle Model Cannot be empty";
        } else {
            editErrors["vehicleModel"] = "";
        }

        // if (!inputFields["vehicleLicense"]) {
        //     validateForm = false;
        //     editErrors["vehicleLicense"] = " Vehicle License Cannot be empty";
        // } else {
        //     editErrors["vehicleLicense"] = "";
        // }

        // if (!inputFields[3]) {
        //     validateForm = false;
        //     editErrors["lastName"] = " Last Name Cannot be empty";
        // } else {
        //     editErrors["lastName"] = "";
        // }

        // if (!inputFields[4]) {
        //     validateForm = false;
        //     editErrors["emailID"] = " Email ID MakeCannot be empty";
        // } else {
        //     editErrors["emailID"] = "";
        // }

        if (!inputFields[5]) {
            validateForm = false;
            editErrors["contactNumber"] = " Contact Number Cannot be empty";
        } else {
            editErrors["contactNumber"] = "";
        }

        this.setState({ editErrors });
        return validateForm;
    }


    handleFormValidation() {
        let inputFields = this.state.createData;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["vehicleMake"]) {
            validateForm = false;
            errors["vehicleMake"] = " Vehicle Make Cannot be empty";
        } else {
            errors["vehicleMake"] = "";
        }

        if (!inputFields["vehicleModel"]) {
            validateForm = false;
            errors["vehicleModel"] = " Vehicle Model Cannot be empty";
        } else {
            errors["vehicleModel"] = "";
        }

        if (!inputFields["vehicleLicense"]) {
            validateForm = false;
            errors["vehicleLicense"] = " Vehicle License Cannot be empty";
        } else {
            errors["vehicleLicense"] = "";
        }

        // if (!inputFields["lastName"]) {
        //     validateForm = false;
        //     errors["lastName"] = " Last Name Cannot be empty";
        // } else {
        //     errors["lastName"] = "";
        // }

        // if (!inputFields["emailID"]) {
        //     validateForm = false;
        //     errors["emailID"] = " Email ID MakeCannot be empty";
        // } else {
        //     errors["emailID"] = "";
        // }

        if (!inputFields["contactNumber"]) {
            validateForm = false;
            errors["contactNumber"] = " Contact Number Cannot be empty";
        } else {
            errors["contactNumber"] = "";
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
            // let tableData = [...this.state.tableData, this.state.createData]
            // this.setState({ tableData });
            this.dialogBoxPopup();
            // let createDataEdit = [{
            //     "vehicleMake": "",
            //     "vehicleModel": "",
            //     "vehicleLicense": "",
            //     "lastName": "",
            //     "emailID": "",
            //     "contactNumber": "",
            // }]
            // this.setState({ createAction: false })
            // this.setState({ createData: createDataEdit })
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

    handleEditAction = (e) => {
        this.setState({ editAction: true })
        this.dialogBoxPopup();
    }

    handleDeleteAction = (e) => {
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
                "vehicleMake": "",
                "vehicleModel": "",
                "vehicleLicense": "",
                "lastName": "",
                "emailID": "",
                "contactNumber": "",
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
            'vehicleMake': this.state.inputFields["vehicleMake"],
            'vehicleModel': this.state.inputFields['vehicleModel'],
            'vehicleLicense': this.state.inputFields['vehicleLicense'],
            'lastName': this.props.name,
            'emailID': this.props.email,
            'contactNumber': this.state.inputFields['contactNumber']
        }

        let createPayload = {
            'vehicleMake': this.state.createData.vehicleMake,
            'vehicleModel': this.state.createData.vehicleModel,
            'vehicleLicense': this.state.createData.vehicleLicense,
            'lastName': this.props.name,
            'emailID': this.props.email,
            'contactNumber': this.state.createData.contactNumber,
        }
        let registerVehicleData="";

        if(this.state.tableData  === "No records present"){
            registerVehicleData = <center>No Records Found</center>
        }else{
            registerVehicleData = this.state.tableData.map((obj, index) => {
            return <form class="vehicleRegister-form">
                <span><input type="radio" value={index + 1} checked={this.state.editdata === (index)} onChange={this.handleRadioSelectedValue.bind(this, index)} /></span>
                <label>Vehicle Make: <label class=" mandatory-field">*</label>:</label><br />
                <input type="text" name="vehicleMake" id="vehicleMake" value={obj.vehicleMake}
                /><br /><br />

                <label>Vehicle Model: <label class="mandatory-field">*</label>:</label><br />
                <input type="text" name="vehicleModel" id="vehicleModel" value={obj.vehicleModel} /><br /><br />

                <label>Vehicle License Plate: <label class="mandatory-field">*</label>:</label><br />
                <input type="text" name="vehicleLicense" id="vehicleLicense" value={obj.vehicleLicense} /><br /><br />

                <label>Resident Last Name: <label class="mandatory-field">*</label>:</label><br />
                <input type="text" name="lastName" id="lastName" value={obj.lastName} /><br /><br />

                <label>Email Id: <label class="mandatory-field">*</label>:</label><br />
                <input type="text" name="emailID" id="emailID" value={obj.emailID} /><br /><br />

                <label>Contact Number <label class="mandatory-field">*</label>:</label><br />
                <input type="text" name="contactNumber" id="contactNumber" value={obj.contactNumber} /><br /><br />

            </form>
        })}

        return (
            <>
                <div class="container">
                    <h2>Register Vehicle</h2>
                </div>
                <br />
                {registerVehicleData}
                <center ><button class="timings-button" onClick={this.handleCreateAction.bind(this)}><i class='fa fa-plus'></i></button>&nbsp;
                    &nbsp;<button class="timings-button" onClick={this.handleEditAction.bind(this)}><i class='fa fa-edit'></i></button>&nbsp;
                    <button class="timings-button" onClick={this.handleDeleteAction.bind(this)}><i class='fa fa-trash-o'></i></button>
                </center><br />
                {this.state.editAction && (
                    <Modal
                        isOpen={this.state.showDialogBoxPopup}
                        onRequestClose={this.dialogBoxPopup.bind(this)}
                        className="boxstyling"
                    >
                        <form>
                            <label>Enter Vehicle Make:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][0]}
                                onChange={this.handleInputChange.bind(this, "vehicleMake")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["vehicleMake"]}</span><br /></>}
                            <label>Enter Vehicle Model:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][1]}
                                onChange={this.handleInputChange.bind(this, "vehicleModel")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["vehicleModel"]}</span><br /></>}
                            {/*<label>Enter Vehicle License:</label><br />
                             <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata - 1].vehicleLicense}
                                onChange={this.handleInputChange.bind(this, "vehicleLicense")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["vehicleLicense"]}</span><br /></>} */}
                            {/* <label>Enter Last Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][3]}
                                onChange={this.handleInputChange.bind(this, "lastName")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["lastName"]}</span><br /></>}
                            <label>Enter Email ID:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][4]}
                                onChange={this.handleInputChange.bind(this, "emailID")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["emailID"]}</span><br /></>} */}
                            <label>Enter Contact Number:</label><br />
                            <input type="text"
                                defaultValue={this.state.tableData[this.state.editdata][5]}
                                onChange={this.handleInputChange.bind(this, "contactNumber")} /><br />
                            {this.state.showEditError && <><span className="showErrors">{this.state.editErrors["contactNumber"]}</span><br /></>}
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
                            <label>Enter Vehicle Make:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.vehicleMake}
                                onChange={this.handleCreate.bind(this, "vehicleMake")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["vehicleMake"]}</span><br /></>}
                            <label>Enter Vehicle Model:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.vehicleModel}
                                onChange={this.handleCreate.bind(this, "vehicleModel")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["vehicleModel"]}</span><br /></>}
                            <label>Enter Vehicle License:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.vehicleLicense}
                                onChange={this.handleCreate.bind(this, "vehicleLicense")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["vehicleLicense"]}</span><br /></>}
                            {/* <label>Enter Last Name:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.lastName}
                                onChange={this.handleCreate.bind(this, "lastName")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["lastName"]}</span><br /></>}
                            <label>Enter Email ID:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.emailID}
                                onChange={this.handleCreate.bind(this, "emailID")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["emailID"]}</span><br /></>} */}
                            <label>Enter Contact Number:</label><br />
                            <input type="text"
                                defaultValue={this.state.createData.contactNumber}
                                onChange={this.handleCreate.bind(this, "contactNumber")} /><br />
                            {this.state.showError && <><span className="showErrors">{this.state.errors["contactNumber"]}</span><br /></>}
                        </form>
                        <button onClick={this.createRequest.bind(this)}>
                            Create
                        </button> &nbsp;
                        <button onClick={this.dialogBoxPopup.bind(this)}>
                            Cancel
                        </button>
                    </Modal>
                )}
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="VisRegVehicle" responseData = {this.getResponseData}/>}
                {this.state.handleAPICreateFlag && <HandleAPI data={createPayload} funcName="VisRegVehicleCreate" responseData = {this.getCreateResponseData}/>}
                {this.state.handleAPIDeleteFlag && <HandleAPI data = {this.state.tableData[this.state.editdata].vehicleLicense} funcName = "VisRegVehicleDelete" responseData = {this.getDeleteResponseData} />}
                {this.state.handleAPIEditFlag && <HandleAPI data = {this.state.tableData[this.state.editdata]} funcName = "VisRegVehicleEdit" responseData = {this.getEditResponseData} />}
            </>
        );
    }
}

export default RegisterVehicle;