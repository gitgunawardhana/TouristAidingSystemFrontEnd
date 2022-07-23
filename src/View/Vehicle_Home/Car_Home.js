import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Hero from '../../Component/Vehicle_Home_Hero/Hero.js';
import Find from '../../Component/Car_Home_Carousel/Find.js';
import Register from "../../Component/Register/Register.js";
import Faq from "../../Component/Car_Home_FAQ_section/faq.js";
import Footer from "../../Component/Footer/Footer.js";
import Navbar from "../../Component/Navbar/Navbar.js"

const Car_Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Register />
      <Find />
      <Faq />
      {/* <Footer /> */}
    </>
  )
}

export default Car_Home
