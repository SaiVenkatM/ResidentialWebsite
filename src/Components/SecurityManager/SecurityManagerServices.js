import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import security from "../../images/security.png";
import manageTimings from '../../images/ManageTimings.jpeg';
import manageResidents from '../../images/manageResidents.jpeg';
import profile from '../../images/profile-vm.png';
import chatbot from '../../images/chatbot.jpeg';
import dashboard from '../../images/dashboard.png';

class SecurityManagerServices extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={security} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageSecurity">Manage Security</Link></h2>
                            <p>Manage security which includes physical security measures such as locks, CCTV survelliance, alarms
                                and maintain the databases of 200 watchmen assigned for various amenities such as entrance, pool,
                                gradens, tennis court, etc. Perform crud operations like edit, create and delete from the exsisting
                                database. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={manageTimings} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageTimings">Manage Timings</Link></h2>
                            <p>Manage the timings of the security staff which includes crud operations like edit, create and delete,
                                assigning the location for each of the 200 watchmen present, number of days and number of hours.
                            </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={manageResidents} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageResidents">Manage Residents</Link></h2>
                            <p>Manage the lease details of residents staying at studios, cabins, town houses for the purpose of
                                verifying it with the database to check if he/she is an existing resident or if there is a request
                                raised by that particular visitor, to ensure security.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={profile} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageVisitors">Manage Visitors</Link></h2>
                            <p>Manage details of visitors with for the purpose of verifying it with the database to check if he/she
                                is an registered visitor to ensure security. The details of visitors include in-time, on-time and
                                also includes the intended resident name , apt number to be visited.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={chatbot} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/chatbot">Chat With Us!</Link></h2>
                            <p>"Chat With US!" to engage in real time conversations with management, to ensure quick and convenient
                                assistance and support. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={dashboard} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/securityManager/report">Dashboard</Link></h2>
                            <p>Dashboard provides a graphical user interface that displays real-time data using pie chart and bar
                                graph, making it easier to monitor. Provide insights regarding the number of vistiors per quater,
                                shows us the trend in the number of security per year. </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SecurityManagerServices;