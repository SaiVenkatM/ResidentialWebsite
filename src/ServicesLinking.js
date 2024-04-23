import React from 'react';
import Services from './Services';
import SecurityManagerServices from './Components/SecurityManager/SecurityManagerServices';
import ApartmentManagerServices from './Components/ApartmentManager/ApartmentManagerServices';
import BuildingManagerServices from './Components/BuildingManager/BuildingManagerServices';
import GardenManagerServices from './Components/GardenManager/GardenManager';
import PoolManagerServices from './Components/PoolManager/PoolManager';
import ResidentServices from './Components/Resident/ResidentServices';
import VisitorManagerServices from './Components/VisitorManager/VisitorManager';
import VisitorServices from './Components/Visitor/VisitorServices';
import SuperAdminServices from './Components/SuperAdmin/SuperAdminServices';

const ServicesLinking = (props) => {

    return (
        <>
            {props.role === "" && <Services />}
            {props.role === "securityManager" && <SecurityManagerServices />}
            {props.role === "ApartmentManager" && <ApartmentManagerServices />}
            {props.role === "BuildingManager" && <BuildingManagerServices />}
            {props.role === "GardenManager" && <GardenManagerServices />}
            {props.role === "PoolManager" && <PoolManagerServices />}
            {props.role === "VisitorManager" && <VisitorManagerServices />}
            {props.role === "Resident" && <ResidentServices />}
            {props.role === "Visitor" && <VisitorServices />}
            {props.role === "superAdmin" && <SuperAdminServices />}
        </>
    );
}

export default ServicesLinking;