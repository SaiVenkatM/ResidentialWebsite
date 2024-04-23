import React, { Component } from "react";
import { Link } from 'react-router-dom';
import poolManager from "./images/poolManager.png";
import garden from "./images/gardenManager-SA.png";
import security from "./images/camera.png";
import parking from "./images/parking.jpeg";
import tennis from "./images/tennis.png";

class Services extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <>
                <div class="container">
                    <h2>Services</h2>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={poolManager} alt="" class="apt-image" />
                        </div>
                        <div class="flip-card-back">
                            <h1><Link to="/Login">POOL</Link></h1>
                            <p>MANAGED BY POOL MANAGER</p>
                            <p>GREAT PLACE TO ENJOY WATER EVENTS</p>

                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={garden} alt="" class="apt-image" />
                        </div>
                        <div class="flip-card-back">
                            <h1><Link to="/Login">GARDEN</Link></h1>
                            <p>MANAGED BY GARDEN MANAGERr</p>
                            <p>GREAT PLACE TO ENJOY NATURE</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={security} alt="" class="apt-image" />
                        </div>
                        <div class="flip-card-back">
                            <h1><Link to="/Login">SECURITY</Link></h1>
                            <p>MANAGED BY SECURITY MANAGER</p>
                            <p>GREAT PLACE TO STAY SAFE</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={parking} alt="" class="apt-image" />
                        </div>
                        <div class="flip-card-back">
                            <h1><Link to="/Login">PARKING</Link></h1>
                            <p>MANAGED BY BUILDING MANAGER</p>
                            <p>GREAT PLACE AND SAFE PLACE TO PARK VECHICLES</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={tennis} alt="" class="apt-image" />
                        </div>
                        <div class="flip-card-back">
                            <h1><Link to="/Login">TENNIS</Link></h1>
                            <p>MANAGED BY BUILDING MANAGER</p>
                            <p>GREAT PLACE TO PLAY TENNIS</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Services;