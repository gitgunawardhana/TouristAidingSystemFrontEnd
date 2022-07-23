import React from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import SmileIcon from "@material-ui/icons/Mood";
// import SearchForm from '../Vehicle_Home_Hero_if_modified/SearchForm.js'

const Hero = () => {
  const navigate = useNavigate();
  const navigateToVehicleFilter = () => {
    navigate('/vehicles-filter');
  };
  return (
    <div className={styles.hero}>
      <form className={styles.HeroForm}>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Search location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.people}>
          <label>Number of Passengers</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="How many"
          />
        </div>
        <div className={styles.search_btn}>
          {/* <AiOutlineSearch className={styles.icon} /> */}
          <button className={styles.btn} onClick={navigateToVehicleFilter}>Search</button>
        </div>
      </form>
    </div>
  );
};
export default Hero;
