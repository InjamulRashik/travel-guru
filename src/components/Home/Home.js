import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Sajek from "../../images/Sajek.png";
import Sreemongol from "../../images/Sreemongol.png";
import Sundorbon from "../../images/sundorbon.png";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();
  return (
    <div className={styles.body}>
      <Header />
      <div className="container">
        <div className={`row ${styles.homeContent} d-flex align-items-center`}>
          <div className="col-md-6 info">
            <h1 className={styles.h1}>Cox's Bazar</h1>
            <p className={styles.p}>
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>

            <button
              onClick={() => history.push("/booking")}
              style={{
                background: "#F9A51A",
                fontWeight: "bold",
                width: "104px",
                height: "44px",
                borderRadius: "5px",
              }}
              className="btn"
            >
              Booking
            </button>
            <br />
          </div>
          <div
            className={`col-md-6 ${styles.places} d-flex justify-content-between`}
          >
            <img src={Sajek} alt="" />
            <img src={Sreemongol} alt="" />
            <img src={Sundorbon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
