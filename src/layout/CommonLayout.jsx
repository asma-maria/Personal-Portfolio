// import React from 'react';

import { Outlet } from "react-router-dom";
// import Home from "../pages/Home";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";
// import Navbar from "../shared/NavBar";
// import Banner from "../shared/Banner";

const CommonLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar></Navbar>
            <Outlet className="mt-16"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;