import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

class Pool extends Component {
    constructor(props) {
    super(props);
    this.state = {
        indexImage: 1,
        images: [
            {
                url:"https://thumbs.dreamstime.com/b/senior-young-man-shake-hands-padel-tennis-match-glad-positive-smiling-171983054.jpg",
            },
            {
                url:"https://www.si.com/.image/t_share/MTk2NjUxMTYzMzQ3NTkzMTgz/melodie-collard-and-julia-adams-unc.jpg",
            },
            {
                url:"https://media.istockphoto.com/id/496037009/photo/shaking-hands-after-a-tennis-match.jpg?s=612x612&w=0&k=20&c=QPkrKmEAdmHrAq4q0a4nNoNW0YECnymfUxLEuMd1aV0=",
            },
            ],
        };
    }
    firstSlideIndex = (index) => {
        this.setState({ indexImage: index + 1 });
    };

    render() {

        return (
            <div>
                <div className="advertisementHeader">
                    <img className="adv-head-image" src="https://reviewed-com-res.cloudinary.com/image/fetch/s--UJ2sGByA--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1597356287543/GettyImages-1171084311.jpg"/>
                    <h2 className="htext">Tennis Events</h2>
                </div>

                <div className="adv-container3">
                    <p className="eventHeading">Events</p>
                </div> 
                <div className="sliderStyle">
                    <SimpleImageSlider
                        width="100%"
                        height="100%"
                        images={this.state.images}
                        autoPlay={true}
                        onStartSlide={this.firstSlideIndex}
                        autoPlayDelay={1}
                    />
                </div>
                
                <div style={{ fontSize: "1.5rem" }}>
                    {this.state.indexImage == 2 && <h2 className="eventHeading">Men's Match</h2>}
                    {this.state.indexImage == 3 && <h2 className="eventHeading">Women's Match</h2>}
                    {this.state.indexImage == 4 && <h2 className="eventHeading">Mixed Match</h2>}
                </div>
            </div>
     );
    }
}

export default Pool;
