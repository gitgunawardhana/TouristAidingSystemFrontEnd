import React from "react";
import "./SignUp.css"
import Navbar from "../../Component/Navbar/Navbar";
import SignInComponent from "../../Component/SignInOrCreateAcconunt/SignUp";
import Footer from "../../Component/Footer/Footer";


function SignUp() {
    return (
        <>
            <Navbar/>
            <SignInComponent/>
            <Footer/>
        </>
    );
}

export default SignUp;