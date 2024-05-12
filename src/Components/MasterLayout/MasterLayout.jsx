// import React from 'react';

import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const MasterLayout = () => {
    return (
        <div>
            <div className="row  position-relative " style={{ backgroundColor: 'white' }} >
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div className="position-relative  containerWidth col-md-10 ">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MasterLayout;

