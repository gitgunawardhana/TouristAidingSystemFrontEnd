import React from "react";
import Navbar from "../../Component/Navbar/Navbar"
import "./AccountSettings.css";
import Body from "../../Component/AccountSettings/AccountSettings";
import Footer from "../../Component/Footer/Footer";

function AccountSetting() {
    return (
        <>
            <Navbar></Navbar>
            <Body></Body>
            <Footer/>
        </>
    );
}

export default AccountSetting;