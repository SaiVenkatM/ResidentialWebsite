import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HandleAPI from '../../HandleAPI';

class Subcription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            poolSubscribed: "notSub",
            gardenSubcribed: "notSub",
            tennisSubcribed: "notSub",
            handleAPIFlag: false,
            handleAPIInsertFlag: false,
            handleAPIUpdateFlag: false,
            subcriptionType:"",
        }
        this.handlePoolSubcription = this.handlePoolSubcription.bind(this);
        this.handleGardenSubcription = this.handleGardenSubcription.bind(this);
        this.handleTennisSubcription = this.handleTennisSubcription.bind(this);
        this.getResponseData = this.getResponseData.bind(this);
    }

    handlePoolSubcription = () => {
        // this.setState({ poolSubscribed: !this.state.poolSubscribed });
        if(this.state.poolSubscribed === "notSub"){
            let poolSubscribed = "sub"
            this.setState({poolSubscribed:poolSubscribed})
        }else{
            let poolSubscribed = "notSub"
            this.setState({poolSubscribed:poolSubscribed})
        }
        let handleAPIUpdateFlag = true
        this.setState({handleAPIUpdateFlag: handleAPIUpdateFlag})
    }

    handleGardenSubcription = () => {
        if(this.state.gardenSubcribed === "notSub"){
            let gardenSubcribed = "sub"
            this.setState({gardenSubcribed:gardenSubcribed})
        }else{
            let gardenSubcribed = "notSub"
            this.setState({gardenSubcribed:gardenSubcribed})
        }
        // this.setState({ gardenSubcribed: !this.state.gardenSubcribed });
        let handleAPIUpdateFlag = true
        this.setState({handleAPIUpdateFlag: handleAPIUpdateFlag})
    }

    handleTennisSubcription = () => {
        // this.setState({ tennisSubcribed: !this.state.tennisSubcribed });
        if(this.state.tennisSubcribed === "notSub"){
            let tennisSubcribed = "sub"
            this.setState({tennisSubcribed:tennisSubcribed})
        }else{
            let tennisSubcribed = "notSub"
            this.setState({tennisSubcribed:tennisSubcribed})
        }
        let handleAPIUpdateFlag = true
        this.setState({handleAPIUpdateFlag: handleAPIUpdateFlag})
    }

    getResponseData = (data) => {
        if(data[0].tennisSubcription !== "notSub"){
            let tennisSubcribed = "sub"
            this.setState({tennisSubcribed:tennisSubcribed})
        }else{
            let tennisSubcribed = "notSub"
            this.setState({tennisSubcribed:tennisSubcribed})
        }

        if(data[0].poolSubscription !== this.state.poolSubscribed){
            this.setState({poolSubscribed:data[0].poolSubcription})
        }

        if(data[0].gardenSubcription !== "notSub"){
            let gardenSubcribed = "sub"
            this.setState({gardenSubcribed:gardenSubcribed})
        }else{
            let gardenSubcribed = "notSub"
            this.setState({gardenSubcribed:gardenSubcribed})
        }
        // console.log("data in get", data[0].poolSubcription)
        
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})

        let handleAPIInsertFlag = false
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})

        let handleAPIUpdateFlag = false
        this.setState({handleAPIUpdateFlag:handleAPIUpdateFlag})
    };

    getResponseUpdateData = (data) =>{
        // if(data[0].tennisSubcription !== "notSub"){
        //     let tennisSubcribed = "sub"
        //     this.setState({tennisSubcribed:tennisSubcribed})
        // }else{
        //     let tennisSubcribed = "notSub"
        //     this.setState({tennisSubcribed:tennisSubcribed})
        // }

        // if(data[0].poolSubscription !== "notSub"){
        //     let poolSubscribed = "sub"
        //     this.setState({poolSubscribed:poolSubscribed})
        // }else{
        //     let poolSubscribed = "notSub"
        //     this.setState({poolSubscribed:poolSubscribed})
        // }

        // if(data[0].gardenSubcription !== "notSub"){
        //     let gardenSubcribed = "sub"
        //     this.setState({gardenSubcribed:gardenSubcribed})
        // }else{
        //     let gardenSubcribed = "notSub"
        //     this.setState({gardenSubcribed:gardenSubcribed})
        // }

        console.log("pool Subcription", this.state.poolSubscribed)
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})

        let handleAPIUpdateFlag = false
        this.setState({handleAPIUpdateFlag:handleAPIUpdateFlag})

        let handleAPIInsertFlag = false
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})
    }

    getResonseDataInsert = (data) =>{
        console.log("data in geinsertt", data)
        // if(data[0].tennisSubcription !== "notSub"){
        //     let tennisSubcribed = "sub"
        //     this.setState({tennisSubcribed:tennisSubcribed})
        // }else{
        //     let tennisSubcribed = "notSub"
        //     this.setState({tennisSubcribed:tennisSubcribed})
        // }

        // if(data[0].poolSubscription !== this.state.poolSubscribed){
        //     let poolSubscribed = "sub"
        //     this.setState({poolSubscribed:poolSubscribed})
        // }else{
        //     let poolSubscribed = "notSub"
        //     this.setState({poolSubscribed:poolSubscribed})
        // }

        // if(data[0].gardenSubcription !== "notSub"){
        //     let gardenSubcribed = "sub"
        //     this.setState({gardenSubcribed:gardenSubcribed})
        // }else{
        //     let gardenSubcribed = "notSub"
        //     this.setState({gardenSubcribed:gardenSubcribed})
        // }
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        
        let handleAPIInsertFlag = false
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})
    }


    componentDidMount() {
        let handleAPIInsertFlag = true
        this.setState({handleAPIInsertFlag: handleAPIInsertFlag})
    }
       

    render() {
        let getData={
            'email': this.props.email,
        }
        let data= {
            'name':this.props.name,
            'email': this.props.email,
            'poolSubcription':this.state.poolSubscribed,
            'gardenSubcription':this.state.gardenSubcribed,
            'tennisSubcription':this.state.tennisSubcribed
        }
        return (
            <>
                <div class="container">
                    <h2>Subscriptions</h2>
                </div>
                { console.log("pool Subcription in retrun", this.state.poolSubscribed)}
                <div class="subcription-image">
                    <span class="container1">
                        <span class="subcription-heading"><Link to="/poolSubcription">POOL</Link></span>
                        {this.state.poolSubscribed === "sub" && <i class="fa fa-bell bell-styling" id="bell" onClick={this.handlePoolSubcription.bind(this)}></i>}
                        {this.state.poolSubscribed === "notSub" && <i class="fa fa-bell-slash bell-styling" id="bell" onClick={this.handlePoolSubcription.bind(this)}></i>}
                        &nbsp;<span class="subcription-heading"><Link to="/resident/poolTimings">Timings</Link></span>
                    </span>
                </div>
                <div class="subcription-image">
                    <span class="container1">
                        <span class="subcription-heading"><Link to="/gardenSubcription">GARDEN</Link></span>
                        {this.state.gardenSubcribed === "sub" && <i class="fa fa-bell bell-styling" id="bell" onClick={this.handleGardenSubcription.bind(this)}></i>}
                        {this.state.gardenSubcribed === "notSub" && <i class="fa fa-bell-slash bell-styling" id="bell" onClick={this.handleGardenSubcription.bind(this)}></i>}
                        &nbsp;<span class="subcription-heading"><Link to="/resident/gardenTimings">Timings</Link></span>
                    </span>
                </div>

                <div class="subcription-image">
                    <span class="container1">
                        <span class="subcription-heading"><Link to="/tennisSubcription">TENNIS COURT</Link></span>
                        {this.state.tennisSubcribed === "sub" && <i class="fa fa-bell bell-styling" id="bell" onClick={this.handleTennisSubcription.bind(this)}></i>}
                        {this.state.tennisSubcribed === "notSub" && <i class="fa fa-bell-slash bell-styling" id="bell" onClick={this.handleTennisSubcription.bind(this)}></i>}
                        &nbsp;<span class="subcription-heading"><Link to="/resident/tennisTimings">Timings</Link></span>
                    </span>
                </div>
                {this.state.handleAPIInsertFlag && <HandleAPI data={getData} funcName="residentSubcriptionsInsert" responseData={this.getResonseDataInsert}/>}
                {this.state.handleAPIFlag && <HandleAPI data = {getData} funcName = "residentSubcriptions" responseData = {this.getResponseData}/>}
                {this.state.handleAPIUpdateFlag && <HandleAPI data = {data} funcName = "residentSubcriptionsEdit" responseData = {this.getResponseUpdateData}/>}
            </>
           
        );
    }
}

export default Subcription;