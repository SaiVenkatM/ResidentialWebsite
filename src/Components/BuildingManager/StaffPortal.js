import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import poolStaff from '../../images/poolstaff.webp';
import gardenStaff from '../../images/garden-staff.png';
import securityStaff from '../../images/security-staff.webp';
import aptStaff from '../../images/apt-staff.png';
import visitorStaff from '../../images/visitor-Staff.avif';

class StaffPortal extends Component {

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="service-container3">
                    <div class="service-row">
                        <div class="service-column">
                            <img src={poolStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/poolManagerStaffList">Pool - Staff List</Link></h2>
                            <p>Manage the staff details which includes name, email id, type of worker, pool name and schedule. Perform crud
                                operations like edit, add or delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={gardenStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/gardenStaffList">Garden - Staff List</Link></h2>
                            <p>Manage the staff details which includes name, email id, type of worker, unit name and schedule. Perform crud
                                operations like edit, add or delete. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={securityStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/ManageSecurity">Security - Staff List</Link></h2>
                            <p>Manage the staff details which includes name, email id, age and location of work.Perform crud operations like
                                edit, add or delete. </p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={aptStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/apartmentManagerStaffList">Apartment - Staff List</Link></h2>
                            <p>Manage the staff information which includes email id, name and type of apartment working in.Perform crud
                                operations like edit, add or delete.</p>
                        </div>
                    </div>
                    <div class="service-row">
                        <div class="service-column">
                            <img src={visitorStaff} alt="" class="image-service" />
                        </div>
                        <div class="service-column2">
                            <h2><Link to="/visitorStaffList">Visitor - Staff List</Link></h2>
                            <p>Manage the staff information which includes email id, name, and the schedule for each worker.Perform crud
                                operations like edit, add or delete. </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StaffPortal;