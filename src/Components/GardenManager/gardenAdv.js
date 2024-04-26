import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

class Pool extends Component {
    constructor(props) {
    super(props);
    this.state = {
        indexImage: 1,
        images: [
            {
                url:"https://thumbs.dreamstime.com/b/park-game-colorfull-funny-kids-36172535.jpg",
            },
            {
                url:"https://cdn.mos.cms.futurecdn.net/QnvGChMuDQuW9L446zM3YP.jpg",
            },
            {
                url:"https://img.freepik.com/free-vector/cartoon-picnic-party-background_52683-69386.jpg",
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
                    <img className="adv-head-image" src="https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg?cs=srgb&dl=pexels-pixabay-60628.jpg&fm=jpg"/>
                    <h2 className="htext">Garden Events</h2>
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
                    {this.state.indexImage == 2 && <h2 className="eventHeading">Birthday Parties</h2>}
                    {this.state.indexImage == 3 && <h2 className="eventHeading">Family Picnics</h2>}
                    {this.state.indexImage == 4 && <h2 className="eventHeading">Kids Games</h2>}
                </div>
            </div>
     );
    }
}

export default Pool;
