import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import hotel from "./images/hotel.png";

class ForgotPswd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFields: {},
            errors: {},
            showError: false,
        };

        this.handleInputValChange = this.handleInputValChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleFormValidation() {
        let inputFields = this.state.inputFields;
        let errors = this.state.errors;
        let validateForm = true;

        if (!inputFields["emailId"]) {
            validateForm = false;
            errors["emailId"] = "Email Id field cannot be empty";
        }

        if (inputFields["emailId"] && !inputFields["emailId"].match(/[^\s]*@[a-zA-Z0-9.-]*/i)) {
            validateForm = false;
            errors["emailId"] = "Email Id field only accepts values a-z,A-Z,0-9,.,@,- only";
        }

        this.setState({ errors });
        return validateForm;
    }

    formSubmit(e) {
        let { history } = this.props;
        console.log("inside form submit function")
        e.preventDefault();

        if (this.handleFormValidation()) {
            history.push('/login');
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

        return (
            <div class="login-container">
                <div class="row">
                    <div class="w3-half">
                        <img src={hotel} alt="" class="image-login-responsive" />
                    </div>
                    <div class="w3-half">
                        <div class="register-page-column">
                            <div>
                                <h2 class="login-heading">
                                    Forgot Password?
                                </h2>
                            </div>
                            <form class="login-form" name="forgotPasswordForm" onSubmit={this.formSubmit}>
                                <label>Enter Email Id <label class="mandatory-field">*</label>:</label><br />
                                <input type="text" name="emailId" id="emailId" placeholder="abc@gmail.com"
                                    onChange={this.handleInputValChange.bind(this, "emailId")}
                                    value={this.state.inputFields["emailId"]} /><br />
                                {this.state.showError && <><span className="showErrors">{this.state.errors["emailId"]}</span><br /></>}
                                <button type="submit" value="Send" name="submit" id="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ForgotPswd);