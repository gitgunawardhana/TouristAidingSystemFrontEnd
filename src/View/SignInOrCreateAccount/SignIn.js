import React from "react";
import "./SignIn.css"
import Navbar from "../../Component/Navbar/Navbar";
import SignInComponent from "../../Component/SignInOrCreateAcconunt/SignIn";


function SignIn() {
    return (
        <>
            <Navbar/>
            <SignInComponent/>
        </>
    );
}

export default SignIn;