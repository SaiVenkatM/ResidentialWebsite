import React, { Component } from 'react';
import maps from '../../images/maps.jpeg';

class Maps extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <h2>MAPS</h2>
                </div>
                <div class="container2">
                    <div class = "maps-container">
                        <p>Terrazas de Guacuco -  provides maps to navigate from one place to other within the complex.</p>
                        <p> Instructions:</p> 
                        <ol>
                            <li>On, click on  <a href="https://www.google.com/maps/d/u/4/edit?mid=1_Kh2Ii1qyBgmktOb8D0Xix9GXQl-vXg&usp=sharing">Navigate</a> - it directs to maps where you can choose any of the given directions in the left side of the page.</li>
                            <li>Identification of places like pool, garden, studios, townhouses and garden is easier by searching for the places in the search bar.</li>
                            <li>In order to get the directions of from one place to another place, click on the check box for the corresponding direction and unselect other directions.</li>
                        </ol>
                    </div>
                </div>
            </>
        )
    }
}

export default Maps;