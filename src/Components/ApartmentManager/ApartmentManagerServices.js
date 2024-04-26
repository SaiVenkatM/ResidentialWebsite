import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import studiosApt from '../../images/studiosApt.jpeg';
import townHouseApt from '../../images/townHouseApt.jpeg';
import cabinApt from '../../images/cabinApt.webp';
import chatbot from '../../images/chatbot.jpeg';

class ApartmentManagerServices extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <h2>Services</h2>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={studiosApt} alt="" className="apt-image" />
                        </div>
                        <div className="flip-card-back">
                            <h1><Link to="/studioServices">STUDIOS</Link></h1>
                            <p>MANAGED BY APARTMENT MANAGER</p>
                            <p>GREAT PLACE TO STAY</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={townHouseApt} alt="" className="apt-image" />
                        </div>
                        <div className="flip-card-back">
                            <h1><Link to="/townHouseServices">TOWN HOUSES</Link></h1>
                            <p>MANAGED BY APARTMENT MANAGERr</p>
                            <p>GREAT PLACE TO STAY</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={cabinApt} alt="" className="apt-image" />
                        </div>
                        <div className="flip-card-back">
                            <h1><Link to="/cabinServices">CABINS</Link></h1>
                            <p>MANAGED BY APARTMENT MANAGER</p>
                            <p>GREAT PLACE TO STAY</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://cdn-icons-png.flaticon.com/512/6821/6821002.png" alt=""
                                className="apt-image" />
                        </div>
                        <div className="flip-card-back">
                            <h1><Link to="/apartmentManager/report">Dashboard</Link></h1>
                            <p>MANAGED BY APARTMENT MANAGER</p>
                            <p>GREAT PLACE TO STAY</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={chatbot} alt="" className="apt-image" />
                        </div>
                        <div className="flip-card-back">
                            <h1><Link to="/chatbot">Chat With Us!</Link></h1>
                            <p>MANAGED BY APARTMENT MANAGER</p>
                            <p>GREAT PLACE TO STAY</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ApartmentManagerServices;