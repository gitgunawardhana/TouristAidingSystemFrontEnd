import React from "react";
import "./Security.css"
import 'react-phone-number-input/style.css'
import Navbar from "../../Component/Navbar/Navbar";
import SecurityCom from "../../Component/Security/SecurityCom";
import Footer from "../../Component/Footer/Footer";


function Security() {

    return (
        <>
            <Navbar/>
            <SecurityCom/>
            <Footer/>

        </>
    );
}

export default Security;
