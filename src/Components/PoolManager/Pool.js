import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

class Pool extends Component {
    constructor(props) {
    super(props);
    this.state = {
        indexImage: 1,
        images: [
            {
                url:"https://cdobible.org/wp-content/uploads/2022/07/pool-party.jpg",
            },
            {
                url:"https://media.istockphoto.com/id/532267082/photo/friends-playing-volleyball-in-a-pool.jpg?s=170667a&w=0&k=20&c=ts-HeKnIpevQLMUWhirBM4HuYvZIbJDvjiugWiUUU4Q=",
            },
            {
                url:"https://www.hastingswaterworks.com/wp-content/uploads/2018/06/pool-party-ideas.jpg",
            },
            {
                url:"https://static01.nyt.com/images/2019/08/04/opinion/04swim1-print/merlin_158664606_db49b79f-4543-4309-ab3d-ab084d479c06-superJumbo.jpg?quality=75&auto=webp",
            }
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
                    <img className="adv-head-image" src="https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808__480.jpg"/>
                    <h2 className="htext">Pool Events</h2>
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
                    {this.state.indexImage == 2 && <h2 className="eventHeading">Pool Party</h2>}
                    {this.state.indexImage == 3 && <h2 className="eventHeading">Pool Volleyball</h2>}
                    {this.state.indexImage == 4 && <h2 className="eventHeading">Pool Dance</h2>}
                    {this.state.indexImage == 5 && <h2 className="eventHeading">Swimming Classes</h2>}
                </div>
            </div>
     );
    }
}

export default Pool;
