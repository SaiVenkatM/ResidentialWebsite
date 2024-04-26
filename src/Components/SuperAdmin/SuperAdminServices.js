import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apt from '../../images/apartmentManager-SA.png';
import bulding from '../../images/buildingManager-SA.png';
import pool from '../../images/poolManager-SA.png';
import garden from '../../images/gardenManager-SA.png';
import visitorManager from '../../images/visitorManager-SA.jpeg';
import security from '../../images/securityManager-SA.png';
import resident from '../../images/residentServices-SA.jpeg';
import dashboard from '../../images/report-superAdmin.png';

class SuperAdminServices extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={apt} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/apartmentManagerServices">Apartment
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={bulding} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/buildingManagerServices">Building
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={pool} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/poolManagerServices">Pool
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={garden} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/gardenManagerServices">Garden
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={visitorManager} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/visitorManagerServices">Visitor
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={security} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/securityManagerServices">Security
                                Manager</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={resident} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/superAdminResidentServices">Resident
                                Services</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={dashboard} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/superAdmin/report">Dashboard</Link></span></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SuperAdminServices;