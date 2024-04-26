import React, { Component } from "react";
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class VisitorTimings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tableData: [],
        }
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        let handleAPIFlag = false

        this.setState({handleAPIFlag: handleAPIFlag})
    };

    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
    }

    render() {

        let data =  {}

        let timingsData="";

        if(this.state.tableData  === "No records present"){
            timingsData = <center>No Records Found</center>
        }else{
            timingsData = this.state.tableData.map((obj, index) => {
            return <center>
                <span>{obj.data}</span><br /><br />
            </center>
        })}

        return (
            <>
                <div class="container">
                    <h2>Visitor Timings</h2>
                </div>
                <br /><br />
                <div><br />
                    {timingsData}
                </div>
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="visitorTimings" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default VisitorTimings;