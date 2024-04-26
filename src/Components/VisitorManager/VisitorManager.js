import React, { Component } from "react";
import { Link } from 'react-router-dom';
import profile from '../../images/profile-vm.png';
import time from '../../images/visitorTimings.png';
import handleReq from '../../images/handleRequest-vm.png';
import chatbot from '../../images/chatbot.jpeg';
import dashboard from '../../images/dashboard.png';

class VisitorManager extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={profile} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitorManager/visitorList">VISITORS LIST</Link></h2>
                            <p>Manage visitor staff details, which includes details such as visitor name, email id, name of resident to be
                                visited along with the room number. Perform crud operations like edit, add or delete. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={time} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitorManager/visitorTimings">Visitor Timings</Link></h2>
                            <p>Display and manage the visitor timings. Perform crud operations like edit, add or delete. </p>
                        </div>
                    </div>

                    <div class="service-row">
                        <div class="service-column">
                            <img src={handleReq} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitorManager/handleRequests">HANDLE REQUEST</Link></h2>
                            <p>Manage the details of requests submitted which includes details like visitor name, email id, resident name,
                                apartment type, room number and an option to whether accept or deny request. Perform crud operations like
                                edit, add or delete. </p>
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
                            <img src={dashboard} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitorManager/report">Dashboard</Link></h2>
                            <p>Dashboard provides a graphical user interface that displays real-time data using pie chart and bar graph,
                                making it easier to monitor. Provide insights regarding the number of vistiors per quater, shows us the trend
                                in the number of security per year. </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default VisitorManager;