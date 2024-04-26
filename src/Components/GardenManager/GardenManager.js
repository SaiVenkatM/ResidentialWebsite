import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gardenEvents from '../../images/gardenEvents.jpeg';
import gardenTime from '../../images/gardenTime.webp';
import gardenStaff from '../../images/staff-gm.png';
import manageResidents from '../../images/manageresidents-gm.jpeg';
import manageVisitors from '../../images/profile-vm.png';
import chatbot from '../../images/chatbot.jpeg';
import dashboard from '../../images/dashboard.png';
import poolAdvertisement from '../../images/poolAdvertisements.jpeg';


class GardenManager extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={gardenEvents} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/gardenEvents">EVENTS</Link></h2>
                            <p>Schedule the events conducted in the garden where each event will have event name, time and date of the
                                event. Perform crud operations like add, edit events. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={poolAdvertisement} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/advertisingGarden">Advertising for Events</Link></h2>
                            <p>Manage and advertise various events conducted in the building</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={gardenTime} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/gardenTimings">Garden Timings</Link></h2>
                            <p>Schedule of the open time of the garden. Perform crud operations like edit, add timings. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={gardenStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/gardenStaffList">STAFF</Link></h2>
                            <p>Details of the staff whihc includes their names, location of working, email id. Perform crud oeprations like
                                add, edit or delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={manageResidents} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageResidents">Manage Residents</Link></h2>
                            <p>Manage the lease details of residents staying at studios, cabins, town houses for the purpose of verifying it
                                with the database to check if he/she is an existing resident or if there is a request raised by that
                                particular visitor, to ensure security.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={manageVisitors} alt="" class="image-service" />
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
                            <img src={dashboard} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/gardenManager/report">Dashboard</Link></h2>
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

export default GardenManager;