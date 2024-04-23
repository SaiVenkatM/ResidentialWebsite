import React, { Component } from "react";
import HandleAPI from "./HandleAPI";
class ContactUS extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputFields: {},
            errors: {},  
            flag:"",
            handleAPIFlag:false,
            tableData: [],
            showError: false,
        }
        this.handleInputValChange = this.handleInputValChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleInputValChange(val, e) {
        let inputFields = this.state.inputFields;
        inputFields[val] = e.target.value;
        this.setState({ inputFields });
        console.log(inputFields);
    }

    handleFormValidation() {
        let inputFields = this.state.inputFields;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["name"]) {
            validateForm = false;
            errors["name"] = "Name field cannot be empty";
        } else {
            errors["name"] = "";
        }

        if (!inputFields["email"]) {
            validateForm = false;
            errors["email"] = "Email field cannot be empty";
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

        this.setState({ errors });
        return validateForm;
    }

    getResponseData = (data) => {
        if(data !== this.state.flag){
            this.setState({ flag: data });
        }
       
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        
    };

    formSubmit(e){
        e.preventDefault();
        console.log("inside form Submit")
        if(this.handleFormValidation()){
            let handleAPIFlag = true
            this.setState({handleAPIFlag: handleAPIFlag})
        }else {
            let showError = this.state.showError;
            showError = true;
            this.setState({ showError });
            console.log("errors inside login page")
        }
    }  
        
    render() {

        let data = {
            'vname':this.state.inputFields["name"],
            'email': this.state.inputFields["email"],
            'phnumber':this.state.inputFields["phnumber"],
            'status':"Not Completed",
            'reqid': Math.random()+Math.random()+Math.random(),
            'incidentType': this.state.inputFields["incidentType"],
            'query':this.state.inputFields["query"],
        }
        return (
            <>
                <div class="login-container">
                    <div class="contact-heading">
                        <h2>CONTACT US</h2>
                    </div>
                </div>
                <div>
                    <form class="contact-form" onSubmit={this.formSubmit}>
                        <span class="contact-inline">
                            <span class="contact-spacing">
                                <label>Enter your Full Name <label class="mandatory-field">*</label>:</label><br />
                                <input type="text" name="name" id="name" 
                                onChange={this.handleInputValChange.bind(this, "name")}
                                value={this.state.inputFields["name"]}
                                />
                            </span>
                            <span class="contact-spacing">
                                <label>Enter your Email Id <label class="mandatory-field">*</label>:</label><br />
                                <input type="text" name="email" id="email" placeholder="abc@gmail.com" 
                                onChange={this.handleInputValChange.bind(this, "email")}
                                value={this.state.inputFields["email"]}
                                />
                            </span>
                        </span>
                        <span class="contact-inline">
                            <span class="contact-spacing">
                                <label>Enter your Phone Number <label class="mandatory-field">*</label>:</label><br />
                                <input type="text" name="phnumber" id="phnumber" placeholder="+18888888888" 
                                onChange={this.handleInputValChange.bind(this, "phnumber")}
                                value={this.state.inputFields["phnumber"]}
                                /><br />
                            </span>
                            <span class="contact-spacing">
                                <label>Incident Type <label class="mandatory-field">*</label>:</label><br />
                                <select name="incidentType" id="incidentType" value={this.state.value} onChange={this.handleInputValChange.bind(this, "incidentType")}>
                                    <option value="">Select Incident Type</option>
                                    <option value="request">Request Incident</option>
                                    <option value="raise">Raise Incident</option>
                                </select>
                            </span>
                        </span>
                        <label>Enter your Query<label class="mandatory-field">*</label>:</label><br />
                        <textarea name="query" id="query" rows="6" cols="70"
                        onChange={this.handleInputValChange.bind(this, "query")}
                        value={this.state.inputFields["query"]}
                        > &nbsp;Enter Query Description</textarea><br />
                        {this.state.showError && <><span className="showErr ors">{this.state.errors["phnumber"]}</span><br /></>}
                        {this.state.showError && <><span className="showErr ors">{this.state.errors["incidentType"]}</span><br /></>}
                        {this.state.showError && <><span className="showErr ors">{this.state.errors["query"]}</span><br /></>}
                        <button type="submit" value="Submit" name="submit" id="submit">Submit</button>
                    </form>
                </div>
                {this.state.handleAPIFlag && <HandleAPI data = {data} funcName = "reqRaiseIncidentAPI" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default ContactUS;