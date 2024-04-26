import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

class DLInstructions extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>DL Instructions</h2>
                </div>
                <br /><br />
                <div class="dl-instructions">
                    <center>Hello visitors!</center><br />
                    <center>Visitor should register his/her vehicle on the Visitor Parking Register Page once they park their
                        vehicle.</center>
                    <br />
                    <center>This registration is valid for only 24 hours.</center> <br />
                    <center>After registration, if the visitor still wants to use the parking space, the the vistor will have to
                        register again.</center> <br />
                    <center>If the vehicle is not register the vehicle will be towed and complex will not be bearing the
                        consequences.</center>
                    <br />
                    <center>Please use the following link to navigate throughout Terrazas De Guacuco to check our services provided.</center> <br />
                    <center><Link to="/Maps">Maps</Link></center>

                </div>
            </>
        );
    }
}

export default withRouter(DLInstructions);