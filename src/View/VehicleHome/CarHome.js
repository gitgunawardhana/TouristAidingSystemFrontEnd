import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Hero from '../../Component/Vehicle_Home_Hero/Hero.js';
import Find from '../../Component/CarHomeCarousel/Find.js';
import Register from "../../Component/Register/Register.js";
import Faq from "../../Component/CarHomeFAQSection/Faq.js";
import Footer from "../../Component/Footer/Footer.js";
import Navbar from "../../Component/Navbar/Navbar.js"

const CarHome = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Register />
      <Find />
      <Faq />
      <Footer/>
    </>
  )
}

export default CarHome
