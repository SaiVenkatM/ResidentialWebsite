import React, { Component } from "react";
import SwimmingPool from './images/about-SwimmingPool.png';
import Tennis from './images/about-tennis.jpeg';
import Garden from './images/about-tennis.jpeg';
import WalkingTrails from './images/about-walkingTrails.jpeg';
import Security from "./images/about-security.jpeg";
import aboutBG from "./images/aboutPage-BG.jpeg";

class About extends Component {

    render() {
        return (
            <>
                <div class="about-container">
                    <h1>ABOUT US</h1>
                </div>

                <div class="col2">
                    <img src={aboutBG} alt="" style={{ width: `100%` }} />
                    <div>
                        <h2 class="tg">Terrazas de Guacuco</h2>
                        <p class="w">Welcome to Terrazaz de guacuco.is a huge complex, it has 367 residential units classified as
                            Studios,
                            Town Houses, and cabins. It has two swimming pools, several gardens, tennis courts and
                            several walking trials.</p>
                    </div>
                </div>

                <div class="about-container3">
                    <p class="about-amenities-heading">Amenities</p>
                </div>

                <div class="about-row1">
                    <div class="about-column3">
                        <img
                            src={SwimmingPool} alt=""
                            style={{ width: `100%` }} />
                        <h2 class="sp">Swimming Pool</h2>
                    </div>
                    <div class="about-column3">
                        <img
                            src={Tennis} alt=""
                            style={{ width: `100%` }} />
                        <h2 class="tl">Tennis Lawn</h2>
                    </div>
                    <div class="about-column3">
                        <img src={Garden} alt=""
                            style={{ width: `100%` }} />
                        <h2 class="g">Garden</h2>
                    </div>
                    <div class="about-column3">
                        <img
                            src={WalkingTrails}
                            alt=""
                            style={{ width: `100%` }} />
                        <h2 class="g">Walking Trails</h2>
                    </div>
                    <div class="about-column3">
                        <img src={Security} alt=""
                            style={{ width: `100%` }} />
                        <h2 class="g">High Security</h2>
                    </div>

                </div>
            </>
        )
    }
}

export default About;