import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HandleAPI from "../../HandleAPI";

class PaymentHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            handleAPIFlag: false,
            handleAPIInsertFlag:false,
            tableData: [],
            editdata: "",
        }
        this.getResponseData = this.getResponseData.bind(this);
    }

    getResponseData = (data) => {
        if(data !== this.state.tableData){
            this.setState({ tableData: data });
        }
        console.log("table data in manage visitors",data)
        let handleAPIFlag = false
        this.setState({handleAPIFlag: handleAPIFlag})
        console.log("handleAPIflag value", this.state.handleAPIFlag)
        console.log("get response data function in manage visitors page", data)

        let createDataEdit = [{
            "DueDate": "",
            "PaymentID": "",
            "EmailID": "",
            "AmtPaid": "",
            "AmtDue": "",
            "PaymentStatus": "",
            "PaymentDate": "",
            "PaymentMethod": "",
            }]
            this.setState({ createAction: false })
            this.setState({ createData: createDataEdit })
    };

    componentDidMount() {
        
        let handleAPIFlag = true
        this.setState({handleAPIFlag: handleAPIFlag})
        // {console.log("handleAPIInsertFlag value", this.state.handleAPIInsertFlag)}
        
    }

    render() {

        let tableData="";

        if(this.state.tableData  === "No records present"){
            tableData = <tr><td colSpan="9">No Records Found</td></tr>
        }else{
            tableData = this.state.tableData.map((obj, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{obj.duedate}</td>
                <td>{obj.paymentid}</td>
                <td>{obj.email}</td>
                <td>{obj.amtpaid}</td>
                <td>{obj.amtdue}</td>
                <td>{obj.paymentstatus}</td>
                <td>{obj.paymentdate}</td>
                <td>{obj.paymentmethod}</td>
            </tr>
        })}

        let insertData = {
            'email':this.props.email
        }

        return (
            <>
                <div class="container">
                    <h2>Payment History</h2>
                </div>
                <div class="div">
                    <button><Link to="/resident/makePayment">Make Payment &nbsp;<i class='fa fa-plus'></i></Link></button>
                </div>
                <div class="container1">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Due date</th>
                            <th>Payment ID</th>
                            <th>Email ID</th>
                            <th>Amount Paid</th>
                            <th>Amount Due</th>
                            <th>Payment Status</th>
                            <th>Payment Date</th>
                            <th>Payment Method</th>
                        </tr>
                        {tableData}
                    </table>
                    {this.state.handleAPIFlag && <HandleAPI data={insertData} funcName="resPaymentHistoryAPI" responseData = {this.getResponseData}/>}
                </div>
            </>
        );
    }
}

export default PaymentHistory;