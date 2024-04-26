import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import studios from '../../images/studiosApt.jpeg';
import townHouse from '../../images/townHouseApt.jpeg';
import cabin from '../../images/cabinApt.webp';

class ManageResidents extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <h2>Manage Resident Services</h2>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={studios} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/studio/studioList">Studios</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={townHouse} alt="" class="apt-image" />
                            <p><span class="superAdmin-span "><Link to="/townHouse/townHouseList">Town Houses</Link></span></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src={cabin} alt="" class="apt-image" />
                            <p><span class="superAdmin-span"><Link to="/cabin/cabinList">Cabins</Link></span></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ManageResidents;