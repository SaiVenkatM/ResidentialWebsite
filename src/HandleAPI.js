import React, { Component } from 'react';
import axios from "axios";

class HandleAPI extends Component{

    constructor(props){
        super(props);
        this.state = {}  
    }

    loginAPI(){
        console.log("inside loginAPI in handle api function ")
        let flag = true;
        let { history } = this.props.historyData;
        axios({
            method: 'post',
            url: '/API/Handle_Login.php',
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data
        })
        .then(response => {
            if (response.data.invalidCred) {
                // alert("Invalid User Credentials")
                this.props.response("Invalid User Credentials");
            }else{
                console.log("response", response.data.login_details)
                if (response.data.login_details[0][1] === "securityManager") {
                    history.push('/securityManagerServices');
                } else if (response.data.login_details[0][1] === "ApartmentManager") {
                    history.push('/apartmentManagerServices');
                } else if (response.data.login_details[0][1] === "BuildingManager") {
                    history.push('/buildingManagerServices');
                } else if (response.data.login_details[0][1] === "GardenManager") {
                    history.push('/gardenManagerServices')
                } else if (response.data.login_details[0][1] === "PoolManager") {
                    history.push('/poolManagerServices');
                } else if (response.data.login_details[0][1] === "Resident") {
                    history.push('/residentServices');
                } else if (response.data.login_details[0][1] === "VisitorManager") {
                    history.push('/visitorManagerServices');
                } else if (response.data.login_details[0][1] === "Visitor") {
                    history.push('/visitorServices');
                } else if (response.data.login_details[0][1] === "superAdmin") {
                    history.push('/superAdminServices');
                }  
                this.props.setRole(response.data.login_details[0][1]);
                this.props.setEmail(response.data.login_details[0][2]);
                this.props.setName(response.data.login_details[0][0]);
                this.props.response("Login Successfull");
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    registerAPI(){
        console.log("inside registerAPI in handle api function ")
        let flag = true;
        let { history } = this.props.historyData;
        axios({
            method: 'post',
            url: '/API/Handle_Register.php',
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data
            
        })
        .then(response => {
            if (response.data.successfullRegistration) {
                alert("Invalid User Credentials")
            }else{
                console.log("got response")
                console.log("response", response)
                history.push('/login');
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    getTableDetails(url){
        console.log("inside get table details handle api function ", this.props.data)
        let flag = true;
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data
            
        })
        .then(response => {
            if (response.data.flag) {
                // alert("No data present in the table")
                this.props.responseData("No records present");
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.table_details)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    createTableData(url){
        console.log("inside create in handle api function ", this.props.data)
        let flag = true;
        if ( this.props.data)
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data
            
        })
        .then(response => {
            if (response.data.successfullCreation) {
                this.props.responseData(response.data.successfullInsertion)
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.successfullCreation)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    deleteTableData(url){
        console.log("inside securityStaffCreateAPI in handle api function ", this.props.data)
        let flag = true;
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                'email':this.props.data,
            }
            
        })
        .then(response => {
            if (response.data.successfullDeletion) {
                this.props.responseData(response.data.successfullInsertion)
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.successfullDeletion)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    editTableData(url){
        console.log("inside edit in handle api function ", this.props.data)
        let flag = true;
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data
            
        })
        .then(response => {
            if (response.data.successfullEdition) {
                this.props.responseData(response.data.successfullInsertion)
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.successfullEdition)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    insertTableDetails(url){
        console.log("inside insert in handle api function ", this.props.data)
        let flag = true;
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: this.props.data  
        })
        .then(response => {
            if (response.data.successfullInsertion) {
                this.props.responseData(response.data.successfullInsertion)
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.successfullInsertion)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    insertFeedBackData(url){
        console.log("inside insert in handle api function ", this.props.option1)
        let flag = true;
        axios({
            method: 'post',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                'option1':this.props.option1,
                'option2':this.props.option2,
                'option3':this.props.option3,
                'option4':this.props.option4
            }
            
        })
        .then(response => {
            if (response.data.successfullInsertion) {
                this.props.responseData(response.data.successfullInsertion)
            }else{
                console.log("got response")
                console.log("response", response)
                this.props.responseData(response.data.successfullInsertion)
            }
        })
        .catch(
            flag = false
        );
        return flag
    }

    generateAPI = () => {
        console.log("inside generate api")
        switch(this.props.funcName){
            //login
            case "loginAPI" : return this.loginAPI();
            //register
            case "registerAPI" : return this.registerAPI();
            //  securtiy staff list - security manager
            case "securityStaffAPI" : return this.getTableDetails('/API/Handle_SecurityStaff.php');
            case "securityStaffCreateAPI" : return this.createTableData('/API/Handle_SecurityStaffCreate.php');
            case "securityStaffDeleteAPI" : return this.deleteTableData('/API/Handle_SecurityStaffDelete.php');
            case "securityStaffEditAPI" : return this.editTableData('/API/Handle_SecurityStaffEdit.php');
            // manage visitors
            case "manageVisitorsGetAPI" : return this.getTableDetails('/API/Handle_ManageVisitorsGet.php');
            case "manageVisitorsCreateAPI" : return this.createTableData('/API/Handle_ManageVisitorsCreate.php');
            case "manageVisitorsDeleteAPI" : return this.deleteTableData('/API/Handle_ManageVisitorsDelete.php');
            case "manageVisitorsEditAPI" : return this.editTableData('/API/Handle_ManageVisitorsEdit.php');
            // Staff timings - security Manager
            case "manageStaffTimings" : return this.insertTableDetails('/API/Handle_ManageStaffTimings.php');
            case "manageStaffGetTimings" : return this.getTableDetails('/API/Handle_ManageStaffTimingsGet.php');
            case "manageStaffCreateTimings" : return this.createTableData('/API/Handle_ManageStaffTimingsCreate.php');
            case "manageStaffDeleteTimings" : return this.deleteTableData('/API/Handle_ManageStaffTimingsDelete.php');
            case "manageStaffEditTimings" : return this.editTableData('/API/Handle_ManageStaffTimingsEdit.php')
            //Apartment Manager (Studio)
            // Apartment Manager(Studio) - Services Requested
            case "studioserviceAPI": return this.getTableDetails("/API/Handle_Studio_Service.php")
            case "studioserviceCreateAPI": return this.createTableData("/API/Handle_Studio_ServiceCreate.php");
            case "studioserviceDeleteAPI": return this.deleteTableData("/API/Handle_Studio_ServiceDelete.php");
            case "studioserviceEditAPI": return this.editTableData("/API/Handle_Studio_ServiceEdit.php");
            // Apartment Manager(Studio) - Manage Services
            case "studiomanageserviceAPI": return this.getTableDetails('/API/Handle_Studio_Manage_Services.php');
            case "studiomanageserviceCreateAPI": return this.createTableData('/API/Handle_Studio_Manage_ServicesCreate.php');
            case "studiomanageserviceDeleteAPI": return this.deleteTableData('/API/Handle_Studio_Manage_ServicesDelete.php');
            case "studiomanageserviceEditAPI": return this.editTableData('/API/Handle_Studio_Manage_ServicesEdit.php');
            // Apartment Manager(Studio) - Resident List
            case "studioreslistAPI": return this.getTableDetails('/API/Handle_Studio_Resident_List.php');
            case "studioreslistCreateAPI": return this.createTableData('/API/Handle_Studio_Resident_List_Create.php')
            case "studioreslistDeleteAPI": return this.deleteTableData('/API/Handle_Studio_Resident_List_Delete.php')
            case "studioreslistEditAPI": return this.editTableData('/API/Handle_Studio_Resident_List_Edit.php')
            //Apartment Manager (TownHouse)
            case "townhouseserviceAPI": return this.getTableDetails('/API/Handle_TownHouse_Service.php');
            case "townhouseserviceCreateAPI": return this.createTableData('/API/Handle_TownHouse_ServiceCreate.php');
            case "townhouseserviceDeleteAPI": return this.deleteTableData('/API/Handle_TownHouse_ServiceDelete.php');
            case "townhouseserviceEditAPI": return this.editTableData('/API/Handle_TownHouse_ServiceEdit.php');
            //Apartment Manager( townHouse) Manage Services
            case "townhousemanageserviceAPI": return this.getTableDetails('/API/Handle_TownHouse_Manage_Service.php');
            case "townhousemanageserviceCreateAPI": return this.createTableData('/API/Handle_TownHouse_Manage_ServiceCreate.php');
            case "townhousemanageserviceDeleteAPI":return this.deleteTableData('/API/Handle_TownHouse_Manage_ServiceDelete.php');
            case "townhousemanageserviceEditAPI":return this.editTableData('/API/Handle_TownHouse_Manage_ServiceEdit.php');
            // Apartment Manager - TownHouse- Resident list
            case "townhousereslistAPI": return this.getTableDetails('/API/Handle_TownHouse_Resident_List.php');
            case "townhousereslistCreateAPI": return this.createTableData('/API/Handle_TownHouse_Resident_ListCreate.php');
            case "townhousereslistDeleteAPI": return this.deleteTableData('/API/Handle_TownHouse_Resident_ListDelete.php');
            case "townhousereslistEditAPI": return this.editTableData('/API/Handle_TownHouse_Resident_ListEdit.php');
            //Apartment Manager (Cabin) -  Request Service
            case "cabinserviceAPI": return this.getTableDetails('/API/Handle_Cabin_Service.php');
            case "cabinserviceCreateAPI": return this.createTableData('/API/Handle_Cabin_ServiceCreate.php');
            case "cabinserviceDeleteAPI": return this.deleteTableData('/API/Handle_Cabin_ServiceDelete.php');
            case "cabinserviceEditAPI": return this.editTableData('/API/Handle_Cabin_ServiceEdit.php');
            // Apartment Manager - Cabin- Manage Services
            case "cabinmanageserviceAPI": return this.getTableDetails('/API/Handle_Cabin_Manage_Services.php');
            case "cabinmanageserviceCreateAPI": return this.createTableData('/API/Handle_Cabin_Manage_ServicesCreate.php');
            case "cabinmanageserviceDeleteAPI": return this.deleteTableData('/API/Handle_Cabin_Manage_ServicesDelete.php');
            case "cabinmanageserviceEditAPI": return this.editTableData('/API/Handle_Cabin_Manage_ServicesEdit.php');
            // Apartment Manager -  Cabin- Resident List
            case "cabinreslistAPI": return this.getTableDetails('/API/Handle_Cabin_Resident_List.php');
            case "cabinreslistCreateAPI": return this.createTableData('/API/Handle_Cabin_Resident_ListCreate.php');
            case "cabinreslistDeleteAPI": return this.deleteTableData('/API/Handle_Cabin_Resident_ListDelete.php');
            case "cabinreslistEditAPI": return this.editTableData('/API/Handle_Cabin_Resident_ListEdit.php');
            //Building Manager
            //Parking allotment
            case "BparkingAPI": return this.getTableDetails('/API/Handle_B_Parking.php');
            case "BparkingCreateAPI": return this.createTableData('/API/Handle_B_ParkingCreate.php');
            case "BparkingEditAPI": return this.editTableData('/API/Handle_B_ParkingEdit.php');
            case "BparkingDeleteAPI": return this.deleteTableData('/API/Handle_B_ParkingDelete.php');
            //Tennis Events
            case "BTennisEventsAPI": return this.getTableDetails('/API/Handle_B_Tennis_Events.php');
            case "BTennisEventsCreateAPI": return this.createTableData('/API/Handle_B_Tennis_EventsCreate.php');
            case "BTennisEventsEditAPI": return this.editTableData('/API/Handle_B_Tennis_EventsEdit.php');
            case "BTennisEventsDeleteAPI": return this.deleteTableData('/API/Handle_B_Tennis_EventsDelete.php');
            //Tennis timings
            case "tennisTimings" : return this.getTableDetails('/API/Handle_tennisTimings.php');
            case "tennisTimingsCreate" : return this.createTableData('/API/Handle_tennisTimingsCreate.php');
            case "tennisTimingsDelete" : return this.deleteTableData('/API/Handle_tennisTimingsDelete.php');
            case "tennisTimingsEdit" : return this.editTableData('/API/Handle_tennisTimings.php');
            //Garden Manager
            case "GardenEventsAPI": return this.getTableDetails('/API/Handle_Garden_Events.php');
            case "GardenEventsCreateAPI": return this.createTableData('/API/Handle_Garden_EventsCreate.php');
            case "GardenEventsDeleteAPI": return this.deleteTableData('/API/Handle_Garden_EventsDelete.php');
            case "GardenEventsEditAPI": return this.editTableData('/API/Handle_Garden_EventsEdit.php');
            //Staff list
            //Apartment Manager Staff List
            case "ApartmentManagerStaffListAPI": return this.getTableDetails('/API/Handle_Apt_Manager_StaffList.php');
            case "ApartmentManagerStaffListCreateAPI": return this.createTableData('/API/Handle_Apt_Manager_StaffListCreate.php');
            case "ApartmentManagerStaffListEditAPI": return this.editTableData('/API/Handle_Apt_Manager_StaffListEdit.php');
            case "ApartmentManagerStaffListDeleteAPI": return this.deleteTableData('/API/Handle_Apt_Manager_StaffListDelete.php');
            // Garden Timings
            case "gardenTimings" : return this.getTableDetails('/API/Handle_gardenTimings.php');
            case "gardenTimingsCreate" : return this.createTableData('/API/Handle_gardenTimingsCreate.php');
            case "gardenTimingsDelete" : return this.deleteTableData('/API/Handle_gardenTimingsDelete.php');
            case "gardenTimingsEdit" : return this.editTableData('/API/Handle_gardenTimingsEdit.php');
            //Pool Manager
            case "PoolEventsAPI": return this.getTableDetails('/API/Handle_Pool_Events.php');
            case "PoolEventsCreateAPI": return this.createTableData('/API/Handle_Pool_EventsCreate.php');
            case "PoolEventsDeleteAPI": return this.deleteTableData('/API/Handle_Pool_EventsDelete.php');
            case "PoolEventsEditAPI": return this.editTableData('/API/Handle_Pool_EventsEdit.php');
            // Pool Timings
            case "poolTimings": return this.getTableDetails('/API/Handle_poolTimings.php');
            case "poolTimingsEdit": return this.editTableData('/API/Handle_poolTimingsEdit.php');
            case "pooolTimingsCreate": return this.createTableData('/API/Handle_poolTimingsCreate.php');
            case "poolTimingsDelete": return this.deleteTableData('/API/Handle_poolTimingsDelete.php');
            //visitor Timings
            case "visitorTimings": return this.getTableDetails('/API/Handle_VisitorTimings.php');
            case "visitorTimingsCreate": return this.createTableData('/API/Handle_VisitorTimingsCreate.php');
            case "visitorTimingsDelete": return this.deleteTableData('/API/Handle_VisitorTimingsDelete.php');
            case "visitorTimingsEdit": return this.editTableData('/API/Handle_VisitorTimingsEdit.php');
            //pool Manager Staff list
            case "PoolManagerStaffListAPI": return this.getTableDetails('/API/Handle_Pool_Manager_Staff_List.php');
            case "PoolManagerStaffListCreateAPI": return this.createTableData('/API/Handle_Pool_Manager_Staff_ListCreate.php');
            case "PoolManagerStaffListEditAPI": return this.editTableData('/API/Handle_Pool_Manager_Staff_ListEdit.php');
            case "PoolManagerStaffListDeleteAPI": return this.deleteTableData('/API/Handle_Pool_Manager_Staff_ListDelete.php');
            //Visitor Profile
            case "visitorProfileInsert" : return this.insertTableDetails('/API/Handle_VisitorProfileInsert.php');
            case "visitorProfileGet": return this.getTableDetails('/API/Handle_VisitorProfileGet.php')
            case "visitorProfileEdit" : return this.editTableData('/API/Handle_VisitorProfile.php');
            //resident Profile
            case "residentProfileInsert" : return this.insertTableDetails('/API/Handle_ResidentProfileInsert.php');
            case "residentProfileGet": return this.getTableDetails('/API/Handle_ResidentProfileGet.php')
            case "residentProfileEdit" : return this.editTableData('/API/Handle_ResidentProfile.php');
            // resident subcription
            case "residentSubcriptions": return this.getTableDetails('/API/Handle_ResidentSubcriptions.php')
            case "residentSubcriptionsInsert": return this.insertTableDetails('/API/Handle_ResidentSubcriptionsInsert.php')
            case "residentSubcriptionsEdit": return this.getTableDetails('/API/Handle_ResidentSubcriptionsEdit.php')
            //Visitor Subcriptions
            case "visitorSubcriptions": return this.getTableDetails('/API/Handle_VisitorSubcriptions.php');
            case "visitorSubcriptionsInsert": return this.insertTableDetails('/API/Handle_VisitorSubcriptionsInsert.php')
            case "visitorSubcriptionsEdit": return this.getTableDetails('/API/Handle_VisitorSubcriptionsEdit.php')
            //Visitor Staff List
            case "VisitorStaffListAPI": return this.getTableDetails('/API/Handle_Visitor_Staff_List.php');
            case "VisitorStaffListCreateAPI": return this.createTableData('/API/Handle_Visitor_Staff_ListCreate.php');
            case "VisitorStaffListDeleteAPI": return this.deleteTableData('/API/Handle_Visitor_Staff_ListDelete.php');
            case "VisitorStaffListEditAPI": return this.editTableData('/API/Handle_Visitor_Staff_ListEdit.php');
            // Super Admin Resident profiles
            case "superAdminResidentProfiles": return this.getTableDetails('/API/Handle_SuperAdminResidentProfiles.php')
            // Super Admin Register Vehicle
            case "superAdminResidentRegisterVehicle": return this.getTableDetails('/API/Handle_SuperAdminResidentRegisterVehicle.php')
            // Super Admin Resident Subcriptions
            case "superAdminResidentSubscriptions": return this.getTableDetails('/API/Handle_SuperAdminResidentSubscription.php');
            // Super Admin Resident Payment History
            case "superAdminResidentPaymentHistory": return this.getTableDetails('/API/Handle_SuperAdminResidentPaymentHistory.php');
            case "superAdminResidentPaymentHistoryInsert": return this.insertTableDetails('/API/Handle_SuperAdminResidentPaymentHistoryInsert.php')
            // Resident Payment History
            case "resPaymentHistoryAPI": return this.getTableDetails('/API/Handle_resPaymentHistorygetAPI.php')
            // Visitor Register Vehicle
            case "VisRegVehicle": return this.getTableDetails('/API/Handle_Vis_RegisterVehicle.php');
            case "VisRegVehicleCreate": return this.createTableData('/API/Handle_Vis_RegisterVehicleCreate.php');
            case "VisRegVehicleDelete": return this.deleteTableData('/API/Handle_Vis_RegisterVehicleDelete.php');
            case "VisRegVehicleEdit": return this.editTableData('/API/Handle_Vis_RegisterVehicleEdit.php');
            // Apartment Manager Report
            case "aptManagerReport": return this.getTableDetails('/API/Handle_Apt_Manager_report.php');
            // Building Manager Report
            case "buildingManagerReport": return this.getTableDetails('/API/Handle_Building_Manager_report.php');
            // Visitor Manager Report
            case "visitorManagerReport": return this.getTableDetails('/API/Handle_VisitorManagerReport.php');
            // Garden Manager Staff list
            case "GardenManagerStaffListAPI": return this.getTableDetails('/API/Handle_Garden_Manager_Staff.php');
            case "GardenManagerStaffListCreateAPI": return this.createTableData('/API/Handle_Garden_Manager_StaffCreate.php');
            case "GardenManagerStaffListDeleteAPI": return this.deleteTableData('/API/Handle_Garden_Manager_StaffDelete.php');
            case "GardenManagerStaffListEditAPI": return this.editTableData('/API/Handle_Garden_Manager_StaffEdit.php');
            //visitormanager-handlerequest
            case "visitorRequestAPI": return this.getTableDetails('/API/Handle_visitorRequest_Events.php');
            case "visitorRequestCreateAPI": return this.createTableData('/API/Handle_visitorRequest_EventsCreate.php');
            case "visitorRequestDeleteAPI": return this.deleteTableData('/API/Handle_visitorRequest_EventsDelete.php');
            case "visitorRequestEditAPI": return this.editTableData('/API/Handle_visitorRequest_EventsEdit.php');
            case "visitorLogsAPI": return this.getTableDetails('/API/Handle_VisitorLogs.php')
            // request raise incident in visitor
            case "reqRaiseIncidentAPI": return this.insertTableDetails('/API/Handle_ReqRaiseIncident.php');
            // Feedback api
            case "feedbackAPI": return this.insertFeedBackData('/API/Handle_Feedback.php');
            case "feedbackGetAPI": return this.getTableDetails('/API/Handle_FeedbackGetAPI.php');
             //visitormanager-visitorlist
             case "visitorListAPI": return this.getTableDetails('/API/Handle_visitorList_Events.php');
             case "visitorListCreateAPI": return this.getTableDetails('/API/Handle_visitorList_EventsCreate.php');
             case "visitorListDeleteAPI": return this.getTableDetails('/API/Handle_visitorList_EventsDelete.php');
             case "visitorListEditAPI": return this.getTableDetails('/API/Handle_visitorList_EventsEdit.php');
            case "default" : console.log("inside switch case ");
        }
    } 

    render(){
        return(
            <>
                {console.log("inside handleapi component", this.props)}
                {this.generateAPI()}
            </>
        );
    }
}

export default HandleAPI;