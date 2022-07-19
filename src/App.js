import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Accommodation from "./View/Accommodation/Accommodation";
import Home from "./View/Home/Home";
import Location from "./View/Location/Location";
import Locations from "./View/Locations/Locations";
import PageNotFound from "./View/PageNotFound/PageNotFound";
import Security from "./View/Security/Security";
import SignUp from "./View/SignInOrCreateAccount/SignUp";
import AccommodationFilter from "./View/AccommodationFilter/AccommodationFilter";
import Profile from "./View/Profile/Profile";
import NotificationSettings from "./View/NotificationSettings/NotificationSettings";
import PaymentMethod from "./View/PaymentMethod/PaymentMethod";
import Notifications from "./View/Notifications/Notifications";
import SignIn from "./View/SignIn/SignIn";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import EmailVerification from "./View/EmailVerification/EmailVerification";



function App() {
    return (
        <>
            <Router>
                <Routes>

                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/locations" element={<Location/>}/>
                    <Route path="/accommodations" element={<Accommodation/>}/>
                    <Route path="/accommodations-filter" element={<AccommodationFilter/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="/security" element={<Security/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/notificationSettings" element={<NotificationSettings/>}/>
                    <Route path="/paymentMethod" element={<PaymentMethod/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path="/signIn" element={<SignIn/>}/>
                    <Route path="/location" element={<Locations/>}/>
                    <Route path="/location/:id" element={<Location/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="/createAccount" element={<CreateAccount/>}/>
                    <Route path="/emailVerification" element={<EmailVerification/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
