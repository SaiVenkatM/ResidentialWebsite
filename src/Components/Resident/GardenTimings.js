import React, { Component } from "react";
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';

class GardenTimings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            handleAPIFlag: false,
            tableData: [],
            
        }

        
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data",data)
        let handleAPIFlag = false

        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in security manager staff", data)
    };

    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        {console.log("handleAPIflag value", this.state.handleAPIFlag)}
    }

    render() {

        let data = "";
        
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
                    <h2>Garden Timings</h2>
                </div>
                <br /><br />
                <div><br />
                    {timingsData}
                </div>
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="gardenTimings" responseData = {this.getResponseData}/>}
                
            </>
        );
    }
}

export default GardenTimings;