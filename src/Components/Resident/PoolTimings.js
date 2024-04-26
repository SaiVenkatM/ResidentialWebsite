import React, { Component } from "react";
import Modal from 'react-modal';
import HandleAPI from '../../HandleAPI';


class PoolTimings extends Component {

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
        console.log("table data",data)
        let handleAPIFlag = false

        this.setState({handleAPIFlag: handleAPIFlag})

    };

    componentDidMount() {
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
    }


    render() {

        let data =  {}

        let timingsData = "";
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
                    <h2>Pool Timings</h2>
                </div>
                <br /><br />
                <div><br />
                    {timingsData}
                    <center> In case of pool parties, timings may change<label class="mandatory-field">*</label><br /></center>
                </div><br />
                {this.state.handleAPIFlag && <HandleAPI data={data} funcName="poolTimings" responseData = {this.getResponseData}/>}
            </>
        );
    }
}

export default PoolTimings;