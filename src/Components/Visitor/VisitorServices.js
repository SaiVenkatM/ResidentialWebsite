import React, { Component } from "react";
import { Link } from 'react-router-dom';
import profileVisitor from '../../images/profile-visitor.jpeg';
import registerVehicle from '../../images/registerVehicle.jpeg';
import drivingInstructions from '../../images/drivingInstructions.png';
import registerIncident from '../../images/registerIncident.png';
import visitorTimings from '../../images/visitorTimings.png';
import navigation from '../../images/navigation.jpeg';
import chatbot from '../../images/chatbot.jpeg';
import subscriptions from '../../images/subscription.png';
import visitorlogs from '../../images/visitorLogs.jpeg';

class VisitorServices extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={profileVisitor} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitor/myProfile">CREATE PROFILE</Link></h2>
                            <p>Manage the profile of the visitors which contains information like name, email id, phone number, dl number
                                and car number plate. Perform crud operations like edit, add or delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={registerVehicle} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitor/registerVehicle">Register Vechicle</Link></h2>
                            <p>Manage the details of the vechicles entering the complex, which contains details like vechicle model,
                                vechicle make, last name of the owner, etc. Perform crud operations like edit, add or delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={drivingInstructions} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="visitor/DLInstructions">Driving Instructions</Link></h2>
                            <p>Manage and edit the driving instructions for visitor. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={registerIncident} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="visitor/registerRaiseIncident">REGISTER INICIDENT/REQUEST</Link></h2>
                            <p>Manage the requests or incidents raised by the visitor, through input fields like full name, email id, phone
                                number, incident type and description of the incident. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={visitorlogs} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="visitor/visitorlogs">Visitor Logs</Link></h2>
                            <p>Manage the requests or incidents raised by the visitor, through input fields like full name, email id, phone
                                number, incident type and description of the incident. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={visitorTimings} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="visitor/visitorTimings">Visitor Timings</Link></h2>
                            <p>Display and manage the visitor timings. Perform crud operations like edit, add or delete. </p>
                        </div>
                    </div>
                    <div class="service-row">
                            <div class="service-column">
                                <img src={subscriptions} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/visitor/subcriptions">MY SUBSCRIPTIONS</Link></h2>
                                <p>"My Subscriptions" allows residents to subscribe to various events at the complex.</p>
                            </div>
                        </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={navigation} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/maps">NAVIGATE</Link></h2>
                            <p>Help with the directions to the desired location.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={chatbot} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/chatbot">CHAT WITH US!</Link></h2>
                            <p>"Chat With US!" to engage in real time conversations with management, to ensure quick and convenient
                                assistance and support. </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default VisitorServices;