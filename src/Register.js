import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import hotel from "./images/hotel.png";
import HandleAPI from "./HandleAPI";
import emailjs from '@emailjs/browser';

class Register extends Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            inputFields: {},
            errors: {},
            showError: false,
            handleAPIFlag: false
        };

        this.handleInputValChange = this.handleInputValChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleFormValidation() {
        let inputFields = this.state.inputFields;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["name"]) {
            validateForm = false;
            errors["name"] = "Name cannot be empty";
        }else{
            errors["name"] = "";
        }

        if (!inputFields["role"]) {
            validateForm = false;
            errors["role"] = "Role cannot be empty";
        }else{
            errors["role"] = "";
        }

        if (!inputFields["emailId"]) {
            validateForm = false;
            errors["emailId"] = "Email Id field cannot be empty";
        }else{
            errors["emailId"] = "";
        }

        if(!inputFields["phnumber"]){
            validateForm = false;
            errors["phnumber"] = "Provide Phone Number";
        }else{
            errors["phnumber"] = "";
        }

        if (!inputFields["password"]) {
            validateForm = false;
            errors["password"] = "Password field cannot be empty";
        }else{
            errors["password"] = "";
        }

        if (!inputFields["passwordCheck"]) {
            validateForm = false;
            errors["passwordCheck"] = "Password field cannot be empty";
        }else{
            errors["passwordCheck"] = "";
        }

        if (inputFields["emailId"] && !inputFields["emailId"].match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
            validateForm = false;
            errors["emailId"] = "Please check provided Email Id.";
        }

        if (inputFields["phnumber"] && (!inputFields["phnumber"].match(/^\d+$/) || inputFields["phnumber"].length != 10)) {
            validateForm = false;
            errors["phnumber"] = "Please provide a valid contactNumber.";
        }

        if (inputFields["password"] && !inputFields["password"].length) {
            validateForm = false;
            errors["password"] = "Password length should be between 8 to 32.";
        }

        if (inputFields["password"] && !inputFields["password"].match(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[A-Za-z0-9]{8,32}$/)) {
            validateForm = false;
            errors["password"] = "Password field should contain at least one lowercase and uppercase letter and no special characters";
        }

        if (inputFields["passwordCheck"] !== inputFields["password"]) {
            validateForm = false;
            errors["passwordCheck"] = "Passwords does not match";
        }
        this.setState({ errors });
        return validateForm;
    }

    formSubmit(e) {
       
        console.log("inside form submit function")
        e.preventDefault();

        if (this.handleFormValidation()) {
            console.log("inside handle form validation")
            e.preventDefault();
            emailjs.sendForm('service_wquxaj6', 'template_qcu1mjb', this.form.current, 'S2MqryOHc2tOUJdYj')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();

            let handleAPIFlag = true
            this.setState({handleAPIFlag: handleAPIFlag})
            console.log("handleAPIflag value", this.state.handleAPIFlag)

        }
        else {
            let showError = this.state.showError;
            showError = true;
            this.setState({ showError });
            console.log("errors inside register page")
        }
    }

    handleInputValChange(val, e) {
        let inputFields = this.state.inputFields;
        inputFields[val] = e.target.value;
        this.setState({ inputFields });
        console.log(inputFields);
    }

    render() {

        let data =  {
            'name': this.state.inputFields["name"],
            'role': this.state.inputFields["role"],
            'email': this.state.inputFields["emailId"],
            'phnumber': this.state.inputFields["phnumber"],
            'password':this.state.inputFields["password"],
        }
        return (
            <div className="login-container">
                <div className="row">
                    <div className="w3-half">
                        <img src={hotel} alt="" className="image-login-responsive" />
                    </div>
                    <div className="w3-half">
                        <div className="register-page-column">
                            <div>
                                <h2 className="login-heading">
                                    Create new Account
                                </h2>
                            </div>
                            <div>
                                <h5 className="login-sub-heading">
                                    Already Registered? <Link to="/login">Login</Link>
                                </h5>
                            </div>
                            <form ref={this.form} onSubmit={this.formSubmit} name="registerForm" className="login-form">
                                <label>Enter Name <label className="mandatory-field">*</label>:</label><br />
                                <input type="text" name="name" id="name" placeholder="abc def"
                                    onChange={this.handleInputValChange.bind(this, "name")}
                                    value={this.state.inputFields["name"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["name"]}</span><br /></>}
                                <label>Are you? <label className="mandatory-field">*</label>:</label><br />
                                <select name="role" id="role" value={this.state.value} onChange={this.handleInputValChange.bind(this, "role")}>
                                    <option value="">Select Role</option>
                                    <option value="Visitor">Visitor</option>
                                    <option value="Resident">Resident</option>
                                    <option value="PoolManager">Pool Manager</option>
                                    <option value="ApartmentManager">Apartment Manager</option>
                                    <option value="BuildingManager">Building Manager</option>
                                    <option value="GardenManager">Garden Manager</option>
                                    <option value="VisitorManager">Visitor Manager</option>
                                    <option value="securityManager">Security Manager</option>
                                    <option value="superAdmin">Super Admin</option>
                                </select><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["role"]}</span><br /></>}
                                <label>Enter Email Id <label className="mandatory-field">*</label>:</label><br />
                                <input type="text" name="emailId" id="emailId" placeholder="abc@gmail.com"
                                    onChange={this.handleInputValChange.bind(this, "emailId")}
                                    value={this.state.inputFields["emailId"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["emailId"]}</span><br /></>}
                                <label>Enter Phone Number <label className="mandatory-field">*</label>:</label><br />
                                <input type="text" name="phnumber" id="phnumber" placeholder="+18888888888"
                                    onChange={this.handleInputValChange.bind(this, "phnumber")}
                                    value={this.state.inputFields["phnumber"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["phnumber"]}</span><br /></>}
                                <label>Enter Password<label className="mandatory-field">*</label> :</label><br />
                                <input type="password" name="password" id="password" placeholder="*********"
                                    onChange={this.handleInputValChange.bind(this, "password")}
                                    value={this.state.inputFields["password"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["password"]}</span><br /></>}
                                <label>Re-Enter Password<label className="mandatory-field">*</label> :</label><br />
                                <input type="password" name="passwordCheck" id="passwordCheck" placeholder="*********"
                                    onChange={this.handleInputValChange.bind(this, "passwordCheck")}
                                    value={this.state.inputFields["passwordCheck"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["passwordCheck"]}</span><br /></>}
                                <button type="submit" value="Sign Up" name="submit" id="submit">Sign Up</button>
                            </form>
                        </div>
                        {this.state.handleAPIFlag && <HandleAPI data={data} funcName="registerAPI" historyData = {this.props}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);