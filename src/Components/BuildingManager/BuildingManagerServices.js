import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parking from '../../images/parking.jpeg';
import tennis from '../../images/tennis.png';
import manageResidents from '../../images/manageResidents.jpeg';
import profileVisitor from '../../images/profile-vm.png';
import staffPortal from '../../images/staffPortal.png';
import navigation from '../../images/navigation.jpeg';
import chatbot from '../../images/chatbot.jpeg';
import poolAdvertisement from '../../images/poolAdvertisements.jpeg';

class BuildingManagerServices extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={parking} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/parking">PARKING</Link></h2>
                            <p>Manage parking details like apartment type, owner name, email id, slot id and occupied. Perform crud
                                operations like add, create and delete the parking slots.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={tennis} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/tennisEvents">TENNIS</Link></h2>
                            <p>Manage the tennis court details as in the date the event or match is being conducted, time and update the
                                status. Perform crud operations like edit, add and delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={poolAdvertisement} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/advertisingTennis">Advertising for Events</Link></h2>
                            <p>Manage and advertise various events conducted in the building</p>
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
                            <img src={profileVisitor} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageVisitors">Manage Visitors</Link></h2>
                            <p>Manage details of visitors with for the purpose of verifying it with the database to check if he/she is an
                                registered visitor to ensure security. The details of visitors include in-time, on-time and also includes the
                                intended resident name , apt number to be visited.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={staffPortal} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/staffPortal">STAFF PORTAL</Link></h2>
                            <p>Handle and Manage the staff list of various services as in pool, garden, visitor, security and apartment.</p>
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
                    <div class="service-row">
                        <div class="service-column">
                            <img src="https://cdn-icons-png.flaticon.com/512/6821/6821002.png" alt=""
                                class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/buildingManager/report">Dashboard</Link></h2>
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

export default BuildingManagerServices;
