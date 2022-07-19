import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import EditProfile from "../../Component/Profile/EditProfile";
import Footer from "../../Component/Footer/Footer";



function Profile() {
    return (

        <div >
            <Navbar/>
            <EditProfile/>
            <Footer/>

        </div>
    );
}

export default Profile;