import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile-visitor.jpeg';
import registerVehicle from '../../images/registerVehicle-resident.jpeg';
import payments from '../../images/payments.png';
import subscriptions from '../../images/subscription.png';
import chatbot from '../../images/chatbot.jpeg';
import navigation from '../../images/navigation.jpeg';

class ResidentServices extends Component {

    render() {
        return (
            <>
                <div>
                    <div class="container">
                        <h2>Services</h2>
                    </div>
                    <div class="service-container3">
                        <div class="service-row">
                            <div class="service-column">
                                <img src={profile} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/resident/myProfile">MY PROFILE</Link></h2>
                                <p>Manage the profile of the residents which contains information like name, email id, phone number, dl number
                                    and car number plate. Perform crud operations like edit, add or delete.</p>
                            </div>
                        </div>
                        <div class="service-row">
                            <div class="service-column">
                                <img
                                    src={registerVehicle} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/resident/registerVehicle">Register Vechicle</Link></h2>
                                <p>Manage the details of the vechicles entering the complex, which contains details like vechicle model,
                                    vechicle make, last name of the owner, etc. Perform crud operations like edit, add or delete.</p>
                            </div>
                        </div>
                        <div class="service-row">
                            <div class="service-column">
                                <img src={payments} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/resident/payment">MY PAYMENTS</Link></h2>
                                <p>"My Payments" allows residents to make payments, track their payment history, etc.</p>
                            </div>
                        </div>
                        <div class="service-row">
                            <div class="service-column">
                                <img src={subscriptions} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/resident/subcriptions">MY SUBSCRIPTIONS</Link></h2>
                                <p>"My Subscriptions" allows residents to subscribe to various events at the complex.</p>
                            </div>
                        </div>

                        <div class="service-row">
                            <div class="service-column">
                                <img src={chatbot} alt="" class="image-service" />
                            </div>
                            <div class="service-column2">
                                <h2><Link to="/chatbot">CHAT WITH US!</Link></h2>
                                <p>"Chat With US!" to engage in real time conversations with management, to ensure quick and convenient
                                    assistance and support.</p>
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
                    </div>
                </div>
            </>
        );
    }
}

export default ResidentServices;