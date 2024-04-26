import React, { Component } from "react";

class VisitorParkingRegistration extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Visitor Parking Registration</h2>
                </div>
                <br /><br />
                <form class="vehicleRegister-form">
                    <label>DL Number: <label class="mandatory-field">*</label>:</label><br />
                    <input type="text" name="DLNumber" id="DLNumber" placeholder="DL Number" /><br /><br />

                    <label>Apartment Visiting: <label class="mandatory-field">*</label>:</label><br />
                    <input type="text" name="apartmentvisiting" id="apartmentvisiting" placeholder="Apartment Number" /><br /><br />

                    <label>Email Id: <label class="mandatory-field">*</label>:</label><br />
                    <input type="text" name="emailid" id="emailid" placeholder="abc@xyz.com" /><br /><br />

                    <label>Parking Space Number:<label class="mandatory-field">*</label>:</label><br />
                    <input type="text" name="contactnumber" id="contactnumber" placeholder="Parking Space Number" /><br /><br />

                    <button>Submit</button>&nbsp;<button><i class='fa fa-plus'></i></button>&nbsp;
                    &nbsp;<button><i class='fa fa-edit'></i></button>&nbsp;
                    <button><i class='fa fa-trash-o'></i></button>

                </form>
            </>
        );
    }
}

export default VisitorParkingRegistration;