import React, { Component } from 'react';

class MakePayment extends Component {

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

        if (!inputFields["nameOnCard"]) {
            validateForm = false;
            errors["nameOnCard"] = "Card Name cannot be empty";
        } else {
            errors["nameOnCard"] = "";
        }

        if (!inputFields["cardNumber"]) {
            validateForm = false;
            errors["cardNumber"] = "Card Number field cannot be empty";
        } else {
            errors["cardNumber"] = "";
        }

        if (!inputFields["date"]) {
            validateForm = false;
            errors["date"] = "Date field cannot be empty";
        } else {
            errors["date"] = "";
        }
        if (!inputFields["cvv"]) {
            validateForm = false;
            errors["cvv"] = "CVV cannot be empty";
        } else {
            errors["cvv"] = "";
        }

        this.setState({ errors });
        return validateForm;
    }

    formSubmit(e) {
        console.log("inside form submit function")
        e.preventDefault();

        if (this.handleFormValidation()) {
            console.log("inside handle form validation")
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
        return (
            <>
                <div class="container">
                    <h2>Make Payment</h2>
                </div>

                <div class="makepayment-container3">
                    <i class="fa fa-paypal card-styling"></i>&nbsp;
                    <i class="fa fa-cc-paypal card-styling"></i>&nbsp;
                    <i class="fa fa-cc-mastercard card-styling"></i>&nbsp;
                    <i class="fa fa-cc-visa card-styling"></i>&nbsp;
                    <i class="fa fa-credit-card card-styling"></i>&nbsp;
                    <i class="fa fa-google-wallet card-styling"></i>
                </div>

                <div class="makepayment-container4">
                    <form class="login-form" name="loginForm" onSubmit={this.formSubmit}>
                        <label>Enter name on card <label class="mandatory-field">*</label></label><br />
                        <input type="text" name="nameOnCard" id="nameOnCard" placeholder="Zayn Malik"
                            onChange={this.handleInputValChange.bind(this, "nameOnCard")}
                            value={this.state.inputFields["nameOnCard"]} /><br />
                        {this.state.showError && <><span className="showErrors">{this.state.errors["nameOnCard"]}</span><br /></>}

                        <label>Enter card number<label class="mandatory-field">*</label></label><br />
                        <input type="password" name="cardNumber" id="cardNumber" placeholder="1234 5678 1234 1234"
                            onChange={this.handleInputValChange.bind(this, "cardNumber")}
                            value={this.state.inputFields["cardNumber"]} /><br />
                        {this.state.showError && <><span className="showErrors">{this.state.errors["cardNumber"]}</span><br /></>}

                        <label>Expiry date<label class="mandatory-field">*</label></label>
                        <label>Enter CVV<label class="mandatory-field">*</label></label><br />
                        <input type="password" name="date" id="date" maxlength="4" size="4" placeholder="05/24"
                            onChange={this.handleInputValChange.bind(this, "date")}
                            value={this.state.inputFields["date"]} />

                        <input type="password" name="cvv" id="cvv" maxlength="4" size="4" placeholder="***"
                            onChange={this.handleInputValChange.bind(this, "cvv")}
                            value={this.state.inputFields["cvv"]} /><br />
                        {this.state.showError && <><span className="showErrors">{this.state.errors["date"]}</span><br /></>}
                        {this.state.showError && <><span className="showErrors">{this.state.errors["cvv"]}</span><br /></>}
                        <label><button type="submit" value="Login" name="submit" id="submit">Confirm Payment</button></label>
                    </form>
                </div>
            </>
        );
    }
}

export default MakePayment;