import React from "react";
import ButtonBar from "../../Components/HomePage/ButtonBar/ButtonBar";
import ButtonBarResponsive from "../../Components/HomePage/ButtonBar/ButtonBarResponsive";
import Header from "../../Components/HomePage/Header/Header";
import Navbar from "../../Components/HomePage/Navbar/Navbar";
import TopLocation from "../../Components/HomePage/TopLocation/TopLocation";
import useMediaQuery from "../../Components/useMediaQuery";
import "./Home.css";

function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className="bg">
      <Navbar></Navbar>
      <Header></Header>
      <h2 className="home-page-we -provide">WE PROVIDE</h2>
      {matches ? (
        <ButtonBar></ButtonBar>
      ) : (
        <ButtonBarResponsive></ButtonBarResponsive>
      )}
      <h2>TOP LOCATION</h2>
      <TopLocation></TopLocation>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default Home;
