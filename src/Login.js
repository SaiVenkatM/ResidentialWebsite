import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import hotel from "./images/hotel.png";
import HandleAPI from "./HandleAPI";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputFields: {},
            errors: {},
            showError: false,
            tableData:{},
            handleAPIFlag: false
        };

        this.handleInputValChange = this.handleInputValChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.getResponseData = this.getResponseData.bind(this);
    }

    getResponseData(val){
        console.log("inside get response data",val)
        let errors = this.state.errors;
        let showError = this.state.showError;
        if(val === "Invalid User Credentials"){
            console.log("inside get response data")
            let handleAPIFlag = false
            showError = true;
            this.setState({handleAPIFlag: handleAPIFlag})
            console.log("handleAPIflag value", this.state.handleAPIFlag)
            errors["API"] = "Invalid User Credentials";
        }else{
            errors["API"] = "";
            showError = false;
        }
        this.setState({ errors });
        this.setState({ showError });
    }

    componentDidMount() {
        this.props.setRole("");
    }

    handleFormValidation() {
        let inputFields = this.state.inputFields;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["emailId"]) {
            validateForm = false;
            errors["emailId"] = "Email Id field cannot be empty";
        } else {
            errors["emailId"] = "";
        }

        if (!inputFields["pswd"]) {
            validateForm = false;
            errors["pswd"] = "Password field cannot be empty";
        } else {
            errors["pswd"] = "";
        }

        if (inputFields["emailId"] && !inputFields["emailId"].match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
            validateForm = false;
            errors["emailId"] = "Please check provided Email Id.";
        }

        if (inputFields["pswd"] && !inputFields["pswd"].match(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[A-Za-z0-9]{8,32}$/)) {
            validateForm = false;
            errors["pswd"] = "Password field should contain at least one lowercase and uppercase letter";
        } 
        this.setState({ errors });
        return validateForm;
    }

    formSubmit(e) {
        console.log("inside form submit function")
        e.preventDefault();
        if (this.handleFormValidation()) {
            console.log("inside handle form validation")
            let handleAPIFlag = true
            this.setState({handleAPIFlag: handleAPIFlag})
            console.log("handleAPIflag value", this.state.handleAPIFlag)
        }
        else {
            let showError = this.state.showError;
            showError = true;
            this.setState({ showError });
            console.log("errors inside login page")
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
            'email': this.state.inputFields['emailId'],
            'password':this.state.inputFields['pswd'],
        }

        return (
            <>
                <div className="login-container">
                    <div className="row">
                        <div className="w3-half">
                            <img src={hotel} alt="" className="image-login-responsive" />
                        </div>
                        <div className="w3-half">
                            <div className="register-page-column">
                                <div>
                                    <h2 className="login-heading">
                                        Login
                                    </h2>
                                </div>
                                <div>
                                    <h5 className="login-sub-heading">
                                        Sign in to continue
                                    </h5>
                                </div>
                                <div>
                                    <h5 className="login-sub-heading">
                                        Forgot Password? &nbsp; <Link to="/forgotPswd">Get Notified!!!</Link>
                                    </h5>
                                </div>
                                <form className="login-form" name="loginForm" onSubmit={this.formSubmit}>
                                    <label>Enter Email Id <label className="mandatory-field">*</label>:</label><br />
                                    <input type="text" name="emailId" id="emailId" placeholder="abc@gmail.com"
                                        onChange={this.handleInputValChange.bind(this, "emailId")}
                                        value={this.state.inputFields["emailId"]} /><br />
                                    {this.state.showError && <><span className="showErr ors">{this.state.errors["emailId"]}</span><br /></>}
                                    <label>Enter Password<label className="mandatory-field">*</label> :</label><br />
                                    <input type="password" name="password" id="password" placeholder="**********"
                                        onChange={this.handleInputValChange.bind(this, "pswd")}
                                        value={this.state.inputFields["pswd"]} /><br />
                                    {this.state.showError && <><span className="showErrors">{this.state.errors["pswd"]}</span><br /></>}
                                    {this.state.showError && <><br/><span className="showErrors">{this.state.errors["API"]}</span><br /></>}
                                    <button type="submit" value="Login" name="submit" id="submit" >Login</button>
                                    
                                </form>
                            </div>
                                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="loginAPI" historyData = {this.props} setRole={this.props.setRole} setEmail={this.props.setEmail} setName = {this.props.setName} response = {this.getResponseData}/>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Login);