import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../src/css/style.css';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';
import ForgotPswd from './ForgotPswd';
import Services from './Services';
import Footer from './Footer';
import Maps from './Components/Maps/Maps';
import Chatbot from './Components/Chatbot/Chatbot';
import ManageResidents from './Components/SecurityManager/ManageResidents';
import ManageSecurity from './Components/SecurityManager/ManageSecurity';
import ManageTimings from './Components/SecurityManager/ManageTimings';
import ManageVisitors from './Components/SecurityManager/ManageVisitors';
import CabinList from './Components/ApartmentManager/Cabin/CabinList';
import StudioList from './Components/ApartmentManager/Studio/StudioList';
import TownHouseList from './Components/ApartmentManager/TownHouse/TownHouseList';
import SecurityManagerServices from './Components/SecurityManager/SecurityManagerServices';
import ServicesLinking from './ServicesLinking';
import ServicesRequestedCabin from './Components/ApartmentManager/Cabin/ServicesRequested';
import ServicesRequestedStudio from './Components/ApartmentManager/Studio/ServicesRequested';
import ServicesRequestedTownHouse from './Components/ApartmentManager/TownHouse/ServicesRequested';
import ManageServicesCabin from './Components/ApartmentManager/Cabin/ManageServices';
import ManageServicesStudio from './Components/ApartmentManager/Studio/ManageServices';
import ManageServicesTownHouse from './Components/ApartmentManager/TownHouse/ManageServices';
import CabinServices from './Components/ApartmentManager/Cabin/CabinServices';
import StudioServices from './Components/ApartmentManager/Studio/StudioServices';
import TownHouseServices from './Components/ApartmentManager/TownHouse/TownHouseServices';
import ApartmentManagerServices from './Components/ApartmentManager/ApartmentManagerServices';
import ApartmentManagerReport from './Components/ApartmentManager/report';
import SecurityManagerReport from './Components/SecurityManager/report';
import BuildingManagerServices from './Components/BuildingManager/BuildingManagerServices';
import StaffPortal from './Components/BuildingManager/StaffPortal';
import TennisEvents from './Components/BuildingManager/TennisEvents';
import TennisTimings from './Components/BuildingManager/TennisTimings';
import Parking from './Components/BuildingManager/Parking';
import ApartmentManagerStaffList from './Components/BuildingManager/ApartmentManagerStaffList';
import VisitorStaffList from './Components/BuildingManager/VisitorStaffList';
import AmenitiesList from './Components/BuildingManager/AmenitiesList';
import BuildingManagerReport from './Components/BuildingManager/report';
import GardenManagerServices from './Components/GardenManager/GardenManager';
import GardenEvents from './Components/GardenManager/GardenEvents';
import GardenTimings from './Components/GardenManager/GardenTimings';
import GardenStaffList from './Components/GardenManager/GardenStaffList';
import GardenManagerReport from './Components/GardenManager/report';
import PoolManagerServices from './Components/PoolManager/PoolManager';
import PoolManagerStaffList from './Components/PoolManager/PoolStaffList';
import PoolTimings from './Components/PoolManager/PoolTimings';
import PoolEvents from './Components/PoolManager/PoolEvents';
import PoolManagerReport from './Components/PoolManager/report';
import ResidentServices from './Components/Resident/ResidentServices';
import ResidentProfile from './Components/Resident/MyProfile';
import ResidentVehicleRegistration from './Components/Resident/RegisterVehicle';
import PaymentHistory from './Components/Resident/PaymentHistory';
import Subcription from './Components/Resident/Subcription';
import TennisSubcriptions from './Components/Resident/TennisSubcription';
import GardenSubcription from './Components/Resident/GardenSubcription';
import PoolSubcription from './Components/Resident/PoolSubcription';
import MakePayment from './Components/Resident/MakePayment';
import ResidentPoolTimings from './Components/Resident/PoolTimings';
import ResidentGardenTimings from './Components/Resident/GardenTimings';
import ResidentTennisTimings from './Components/Resident/TennisTimings';
import VisitorManagerServices from './Components/VisitorManager/VisitorManager';
import VisitorList from './Components/VisitorManager/VisitorList';
import VisitorTimingsManager from './Components/VisitorManager/VisitorTimings';
import HandleRequests from './Components/VisitorManager/HandleRequest';
import VisitorManagerReport from './Components/VisitorManager/report';
import VisitorServices from './Components/Visitor/VisitorServices';
import VisitorProfile from './Components/Visitor/MyProfile';
import VisitorRegisterVehicle from './Components/Visitor/RegisterVehicle';
import DLInstructions from './Components/Visitor/DLInstructions';
import RequestRaiseIncident from './Components/Visitor/RequestRaiseIncident';
import VisitorTimings from './Components/Visitor/VisitorTimings';
import SuperAdminServices from './Components/SuperAdmin/SuperAdminServices';
import SuperAdminReport from './Components/SuperAdmin/report';
import VisitorLogs from './Components/Visitor/VisitorLogs';
import ResidentServciesSuperAdmin from './Components/SuperAdmin/ResidentServciesSuperAdmin';
import SuperAdminResidentProfile from './Components/SuperAdmin/SuperAdminResidentProfile';
import SuperAdminResidentRegisterVehicle from './Components/SuperAdmin/SuperAdminResidentRegisterVehicle';
import SuperAdminResidentSubscriptions from './Components/SuperAdmin/SuperAdminResidentSubscriptions';
import SuperAdminResidentMyPayment from './Components/SuperAdmin/SuperAdminResidentMyPayment';
import VisitorSubcription from './Components/Visitor/Subcription';
import Feedback from './Feedback';
import Pool from './Components/PoolManager/Pool';
import GardenAdv from './Components/GardenManager/gardenAdv';
import TennisAdv from './Components/BuildingManager/tennisAdv';

const Routing = (props) => {

    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    console.log("role value", role)

    return (
        <>
            <Router>
                <nav className="nav-bar">
                    <div className="project-title-name"><Link to="/">Terrazas de Guacuco</Link></div>
                    <div className="nav-bar-pages">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/contactUs">Contact</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            {role === "" && <li><Link to="/register">Login/Register</Link></li>}
                            {role !== "" && <li><Link to="/login">Logout</Link></li>}
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/register"><Register /></Route>
                    <Route path="/login" ><Login setRole={setRole} setEmail={setEmail} setName={setName}/></Route>
                    <Route path="/forgotPswd" ><ForgotPswd /></Route>
                    <Route path="/service"><ServicesLinking role={role} /></Route>
                    <Route path="/services"><Services /></Route>
                    <Route path="/contactUs"><ContactUs /></Route>
                    <Route path="/maps"><Maps /></Route>
                    <Route path="/chatbot"><Chatbot /></Route>
                    <Route path="/apartmentManagerServices"><ApartmentManagerServices /></Route>
                    <Route path="/cabinServices"><CabinServices /></Route>
                    <Route path="/cabin/cabinList"><CabinList /></Route>
                    <Route path="/cabin/manageServices"><ManageServicesCabin /></Route>
                    <Route path="/cabin/servicesRequested"><ServicesRequestedCabin /></Route>
                    <Route path="/studioServices"><StudioServices /></Route>
                    <Route path="/studio/servicesRequested"><ServicesRequestedStudio /></Route>
                    <Route path="/studio/studioList"><StudioList /></Route>
                    <Route path="/studio/manageServices"><ManageServicesStudio /></Route>
                    <Route path="/townHouseServices"><TownHouseServices /></Route>
                    <Route path="/townHouse/townHouseList"><TownHouseList /></Route>
                    <Route path="/townHouse/manageServices"><ManageServicesTownHouse /></Route>
                    <Route path="/townHouse/servicesRequested"><ServicesRequestedTownHouse /></Route>
                    <Route path="/apartmentManager/report"><ApartmentManagerReport /></Route>
                    <Route path="/securityManagerServices"><SecurityManagerServices /></Route>
                    <Route path="/ManageResidents"><ManageResidents /></Route>
                    <Route path="/ManageSecurity"><ManageSecurity /></Route>
                    <Route path="/ManageTimings"><ManageTimings /></Route>
                    <Route path="/ManageVisitors"><ManageVisitors /></Route>
                    <Route path="/securityManager/report"><SecurityManagerReport /></Route>
                    <Route path="/buildingManagerServices"><BuildingManagerServices /></Route>
                    <Route path="/staffPortal"><StaffPortal /></Route>
                    <Route path="/tennisEvents"><TennisEvents /></Route>
                    <Route path="/tennisTimings"><TennisTimings /></Route>
                    <Route path="/parking"><Parking /></Route>
                    <Route path="/apartmentManagerStaffList"><ApartmentManagerStaffList /></Route>
                    <Route path="/visitorStaffList"><VisitorStaffList /></Route>
                    <Route path="/visitor/subcriptions"><VisitorSubcription name={name} email={email}/></Route>
                    <Route path="/amenitiesList"><AmenitiesList /></Route>
                    <Route path="/buildingManager/report"><BuildingManagerReport /></Route>
                    <Route path="/gardenManagerServices"><GardenManagerServices /></Route>
                    <Route path="/gardenEvents"><GardenEvents /></Route>
                    <Route path="/gardenTimings"><GardenTimings /></Route>
                    <Route path="/gardenStaffList"><GardenStaffList /></Route>
                    <Route path="/gardenManager/report"><GardenManagerReport /></Route>
                    <Route path="/poolManagerServices"><PoolManagerServices /></Route>
                    <Route path="/poolTimings"><PoolTimings /></Route>
                    <Route path="/poolManagerStaffList"><PoolManagerStaffList /></Route>
                    <Route path="/poolEvents"><PoolEvents /></Route>
                    <Route path="/poolManager/report"><PoolManagerReport /></Route>
                    <Route path="/residentServices"><ResidentServices/></Route>
                    <Route path="/resident/myProfile"><ResidentProfile name={name} email={email}/></Route>
                    <Route path="/resident/registerVehicle"><ResidentVehicleRegistration name={name} email={email}/></Route>
                    <Route path="/resident/payment"><PaymentHistory name={name} email={email}/></Route>
                    <Route path="/resident/subcriptions"><Subcription name={name} email={email}/></Route>
                    <Route path="/tennisSubcription"><TennisSubcriptions /></Route>
                    <Route path="/gardenSubcription"><GardenSubcription /></Route>
                    <Route path="/poolSubcription"><PoolSubcription /></Route>
                    <Route path="/resident/makePayment"><MakePayment /></Route>
                    <Route path="/resident/poolTimings"><ResidentPoolTimings /></Route>
                    <Route path="/resident/gardenTimings"><ResidentGardenTimings /></Route>
                    <Route path="/resident/tennisTimings"><ResidentTennisTimings /></Route>
                    <Route path="/visitorManagerServices"><VisitorManagerServices /></Route>
                    <Route path="/visitorManager/visitorList"><VisitorList /></Route>
                    <Route path="/visitorManager/visitorTimings"><VisitorTimingsManager /></Route>
                    <Route path="/visitorManager/handleRequests"><HandleRequests /></Route>
                    <Route path="/visitorManager/report"><VisitorManagerReport /></Route>
                    <Route path="/visitorServices"><VisitorServices /></Route>
                    <Route path="/visitor/myProfile"><VisitorProfile name={name} email={email}/></Route>
                    <Route path="/visitor/registerVehicle"><VisitorRegisterVehicle name={name} email={email}/></Route>
                    <Route path="/visitor/DLInstructions"><DLInstructions /></Route>
                    <Route path="/visitor/registerRaiseIncident"><RequestRaiseIncident name={name} email={email}/></Route>
                    <Route path="/visitor/visitorTimings"><VisitorTimings /></Route>
                    <Route path="/superAdminServices"><SuperAdminServices /></Route>
                    <Route path="/superAdmin/report"><SuperAdminReport /></Route>
                    <Route path="/visitor/visitorlogs"><VisitorLogs name={name} email={email}/></Route>
                    <Route path="/blog" component={() => window.location = 'http://vxl6814.uta.cloud/'} />
                    <Route path="/superAdminResidentServices"><ResidentServciesSuperAdmin/></Route>
                    <Route path="/superAdmin/resident/residentProfile"><SuperAdminResidentProfile/></Route>
                    <Route path="/superAdmin/resident/registerVehicle"><SuperAdminResidentRegisterVehicle/></Route>
                    <Route path="/superAdmin/resident/subscriptions"><SuperAdminResidentSubscriptions/></Route>
                    <Route path="/superAdmin/resident/myPayment"><SuperAdminResidentMyPayment/></Route>
                    <Route path="/feedback"><Feedback/></Route>
                    <Route path="/advertising"><Pool/></Route>
                    <Route path="/advertisingGarden"><GardenAdv/></Route>
                    <Route path="/advertisingTennis"><TennisAdv/></Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Routing;