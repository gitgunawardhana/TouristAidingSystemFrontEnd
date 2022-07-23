import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Accommodation from "./View/Accommodation/Accommodation";
import AccommodationFilter from "./View/AccommodationFilter/AccommodationFilter";
import Attraction from "./View/Attraction/Attraction";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import EmailVerification from "./View/EmailVerification/EmailVerification";
import Home from "./View/Home/Home";
import Location from "./View/Location/Location";
import Locations from "./View/Locations/Locations";
import Notifications from "./View/Notifications/Notifications";
import NotificationSettings from "./View/NotificationSettings/NotificationSettings";
import PageNotFound from "./View/PageNotFound/PageNotFound";
import PaymentMethod from "./View/PaymentMethod/PaymentMethod";
import Profile from "./View/Profile/Profile";
import Security from "./View/Security/Security";
import SignIn from "./View/SignIn/SignIn";
import SignUp from "./View/SignInOrCreateAccount/SignUp";
import Vehicle from "./View/Vehicle/Vehicle";
import Vehicle_Home from '../src/View/Vehicle_Home/Car_Home.js'
import Vehicle_Payment from '../src/View/Vehicle_Payment/CarDetails.js'
function App() {
  return (
    <>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/accommodations" element={<Accommodation />} />
          <Route
            path="/accommodations-filter"
            element={<AccommodationFilter />}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/security" element={<Security />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/notificationSettings"
            element={<NotificationSettings />}
          />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/attraction/:id" element={<Attraction />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/vehicles" element={<Vehicle_Home />} />
          <Route
            path="/vehicles-filter"
            element={<Vehicle />}
          />
          <Route
            path="/vehicles-payment"
            element={<Vehicle_Payment />}
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
