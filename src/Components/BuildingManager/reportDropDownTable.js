import React, { Component } from "react";

class reportDropDownTable extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <>
                {this.props.data === "amenities" && <div class="table-responsive">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Pool1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>Garden1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>Garden3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>Pool3</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>Walking Trail3</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Donna</td>
                            <td>donna@gmail.com</td>
                            <td>Walking Trail1</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "securityManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>25</td>
                            <td>Entrance3</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>35</td>
                            <td>Back Entrance</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>34</td>
                            <td>Entrance1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>33</td>
                            <td>Entrance4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>29</td>
                            <td>Main Entrance</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Donna</td>
                            <td>donna@gmail.com</td>
                            <td>39</td>
                            <td>Main Entrance</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "parkingManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mohan</td>
                            <td>mohan@gmail.com</td>
                            <td>55</td>
                            <td>Parking1-Level1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Louis</td>
                            <td>louis@gmail.com</td>
                            <td>45</td>
                            <td>Parking1-Level2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Micheal</td>
                            <td>micheal@gmail.com</td>
                            <td>34</td>
                            <td>Parking2-Level1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>33</td>
                            <td>Parking1</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>29</td>
                            <td>Parking3</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Kabir</td>
                            <td>kabir@gmail.com</td>
                            <td>39</td>
                            <td>Parking1-Level3</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "poolManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Worker Type</th>
                            <th>Pool Name</th>
                            <th>Schedule</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Pool1</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>Helps</td>
                            <td>Pool1</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>Manager</td>
                            <td>Pool1</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Pool2</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>Main Helper</td>
                            <td>Pool3</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Donna</td>
                            <td>donna@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Pool3</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "gardenManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Worker Type</th>
                            <th>Unit Name</th>
                            <th>Schedule</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Cleaner</td>
                            <td>garden1</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>Helps</td>
                            <td>garden3</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>Manager</td>
                            <td>garden2</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>Cleaner</td>
                            <td>garden2</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "visitorManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Worker Type</th>
                            <th>Schedule</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>Helps</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>Manager</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jenny</td>
                            <td>jenny@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>Main Helper</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Donna</td>
                            <td>donna@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "tennisManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Worker Type</th>
                            <th>Pool Name</th>
                            <th>Schedule</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Tennis1</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jason</td>
                            <td>jason@gmail.com</td>
                            <td>Helps</td>
                            <td>Tennis3</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jakson</td>
                            <td>jakson@gmail.com</td>
                            <td>Manager</td>
                            <td>Tennis2</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Rachel</td>
                            <td>rachel@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Tennis4</td>
                            <td>Mon,Tue,Wed(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mike</td>
                            <td>Mike@gmail.com</td>
                            <td>Main Helper</td>
                            <td>Tennis2</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Donna</td>
                            <td>donna@gmail.com</td>
                            <td>Cleaner</td>
                            <td>Tennis2</td>
                            <td>Thur,Fri,Sat,Sun(9am-6pm)</td>
                        </tr>
                    </table>
                </div>}
                {this.props.data === "apartmentManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Managing Apartment Type</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Zayn</td>
                            <td>zayn123@gmail.com</td>
                            <td>Studio</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Arj</td>
                            <td>arj9@gmail.com</td>
                            <td>Townhouse</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Virat</td>
                            <td>viratK18@gmail.com</td>
                            <td>Cabin</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>mary</td>
                            <td>mary@gmail.com</td>
                            <td>Cabin</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nikhil</td>
                            <td>nikhil18@gmail.com</td>
                            <td>Studio</td>
                        </tr>
                    </table></div>}
                {this.props.data === "buildingManager" && <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Zayn</td>
                            <td>zayn123@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Arj</td>
                            <td>arj9@gmail.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Virat</td>
                            <td>viratK18@gmail.com</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>mary</td>
                            <td>mary@gmail.com</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nikhil</td>
                            <td>nikhil18@gmail.com</td>
                        </tr>
                    </table></div>}

            </>
        );
    }
}

export default reportDropDownTable;