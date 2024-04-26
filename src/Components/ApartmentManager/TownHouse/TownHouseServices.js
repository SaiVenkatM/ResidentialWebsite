import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requests from '../../../images/requests.jpeg';
import manageServices from '../../../images/manageServices.png';
import leaseDetails from '../../../images/leaseDetails.png';

class TownHouseServices extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={requests} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/townHouse/servicesRequested">REQUESTS</Link></h2>
                            <p>Manager can view the requests pushed by the residents of studios and also the status the request. Perform
                                crud operations like edit, create and delete actions.</p>
                        </div>
                    </div>

                    <div class="service-row">
                        <div class="service-column">
                            <img src={manageServices} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/townHouse/manageServices">MANAGE SERVICES</Link></h2>
                            <p>Manager can view the service types and the service handler names, email id. Perform crud operations like
                                edit, create and delete actions. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={leaseDetails} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/townHouse/townHouseList">LEASE DETAILS OF RESIDENTS</Link></h2>
                            <p>Manager can view the lease details of residents like the lease start date, end date, resident name, email and
                                room number. Perform crud operations like edit, create and delete actions.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TownHouseServices;