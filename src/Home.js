import React, { Component } from "react";
import cabin from './images/cabin.jpeg';
import townhouse from './images/townhouse.jpg';
import studio from './images/studio.jpg';
import cctv from './images/cctv.png';
import court from './images/court.png';
import info from './images/info.png';
import sp from './images/sp.png';
import team from './images/team.png';
import gym from './images/gym.png';

class About extends Component {

    render() {
        return (
            <>
                <div className="home-bg">
                    <div>
                        <div className="home-container1">
                            <h1 className="font1">Welcome to Terrazas de Guacuco</h1>
                        </div>
                        <div className="home-container2">
                            <span>
                                <h1 className="font2">We believe in Minimalism. Less is More.</h1>
                            </span>
                            <span>
                                <h1 className="font2">With 364 residential units.</h1>
                            </span>
                        </div>
                        <div className="home-container3">
                            <div className="home-inline">
                                <div className="apt-container">
                                    <img src={cabin} alt="" className="home-inline-image" />
                                    <h1>Cabins</h1>
                                </div>
                                <div className="apt-container">
                                    <img src={townhouse} alt=""
                                        className="home-inline-image" />
                                    <h1>Town Houses</h1>
                                </div>
                                <div className="apt-container">
                                    <img src={studio} alt="" className="home-inline-image" />
                                    <h1>Studios</h1><br /><br /><br />
                                </div>
                            </div>
                        </div>
                        <div className="home-container4">
                            <div className="services-container1">
                                <h1>THE GOOD PART</h1>
                            </div>
                            <div className="icon-container">
                                <ul>
                                    <li><img src={cctv} alt="" width="180px" className="home-img" />
                                        <h4>24/7 Security</h4>
                                    </li>
                                    <li><img src={court} alt="" width="180px" className="home-img" />
                                        <h4>Tennis Court</h4>
                                    </li>
                                    <li><img src={info} alt="" width="180px" className="home-img" />
                                        <h4>24/7 Info Desk</h4>
                                    </li>
                                    <li><img src={sp} alt="" width="180px" className="home-img" />
                                        <h4>Pool</h4>
                                    </li>
                                    <li><img src={team} alt="" width="180px" className="home-img" />
                                        <h4>Managers</h4>
                                    </li><br />
                                    <li><img src={gym} alt="" width="180px" className="home-img" />
                                        <h4>Gym</h4>
                                    </li>
                                </ul>
                            </div>
                            <br /><br /><br />
                            <div className="services-container1">
                                <h1>Come Visit Us</h1>
                            </div>
                            <div>
                                <form className="contact-form">
                                    <span className="contact-inline">
                                        <span className="contact-spacing">

                                            <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                                        </span>
                                        <span className="contact-spacing">

                                            <input type="text" name="firstName" id="firstName"
                                                placeholder="Enter First Name" /><br />
                                        </span>
                                    </span>
                                    <span className="contact-inline">
                                        <span className="contact-spacing">

                                            <input type="text" name="emailId" id="emailId" placeholder="abc@gmail.com" />
                                        </span>
                                        <span className="contact-spacing">

                                            <input type="text" name="phoneNumber" id="phoneNumber"
                                                placeholder="+18888888888" /><br />
                                        </span>
                                    </span>
                                    <button type="submit" value="Submit" name="submit" id="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;