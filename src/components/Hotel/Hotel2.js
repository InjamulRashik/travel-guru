import React, { useContext, useState } from "react";
import logo from "../../Logo2.png";
import styles from "./Hotel.module.css";
import hotel1 from "../../images/hotel1.png";
import hotel2 from "../../images/hotel2.png";
import hotel3 from "../../images/hotel3.png";
import star from "../../icons/star_1_.png";
import { UserContext } from "../../App";
import { placeData } from "../../fakeData/placeData";
import { Link, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";

const Hotel2 = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const defaultProps = {
    center: {
      lat: 24.305016,
      lng: 91.729314,
    },
    zoom: 12,
  };

  return (
    <div className="container">
      <div className="container">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between bg-transparent ">
            <a
              style={{ marginRight: "50px", marginLeft: "70px" }}
              className="navbar-brand"
              href="#"
            >
              <img
                style={{ height: "56", width: "120.26px" }}
                src={logo}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <text
                style={{
                  borderRadius: "5px",
                  marginRight: "50px",
                }}
                type="text"
                name=""
                id=""
              >
                {" "}
                <b>
                  Welcome,
                  <span style={{ color: "#F9A51A" }}>
                    {" "}
                    {loggedInUser.email}
                  </span>
                </b>
              </text>{" "}
              <ul className="navbar-nav">
                <li
                  style={{
                    marginRight: "50px",
                    fontWeight: "bold",
                  }}
                  className="nav-item "
                >
                  <a style={{ color: "black" }} className="nav-link" href="#">
                    News
                  </a>
                </li>
                <li
                  style={{ marginRight: "50px", fontWeight: "bold" }}
                  className="nav-item"
                >
                  <a style={{ color: "black" }} className="nav-link" href="#">
                    Destination
                  </a>
                </li>
                <li
                  style={{ marginRight: "50px", fontWeight: "bold" }}
                  className="nav-item"
                >
                  <a style={{ color: "black" }} className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li
                  style={{ marginRight: "50px", fontWeight: "bold" }}
                  className="nav-item"
                >
                  <a style={{ color: "black" }} className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <Link to="/login">
                  <button
                    style={{
                      background: "#F9A51A",
                      fontWeight: "bold",
                      width: "104px",
                      height: "44px",
                      borderRadius: "5px",
                    }}
                    className="btn"
                  >
                    Logout
                  </button>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div
        class="d-flex flex-row bd-highlight mb-3 justify-content-between "
        style={{ marginTop: "20px" }}
      >
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <img className={styles.img} src={hotel1} alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <h4>Grand Selim</h4>
              <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
              <p className="text-muted">Wif Air conditioning Kitchen</p>
              <p className="text-muted">Cancellation fexibility availiable</p>
              <p>
                {" "}
                <img className={styles.icon} src={star} alt="" /> 4.9 (20){" "}
                <span>
                  <b>$34/</b>
                </span>
                <span className="text-muted">night $167 total</span>
              </p>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <img className={styles.img} src={hotel2} alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <h4>Paradise Lodge</h4>
              <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
              <p className="text-muted">Wif Air conditioning Kitchen</p>
              <p className="text-muted">Cancellation fexibility availiable</p>
              <p>
                {" "}
                <img className={styles.icon} src={star} alt="" /> 4.8 (10){" "}
                <span>
                  <b>$52/</b>
                </span>
                <span className="text-muted">night $167 total</span>
              </p>
            </div>
          </div>
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <img className={styles.img} src={hotel3} alt="" />
            </div>
            <div class="p-2 bd-highlight">
              <h4>Balishira Resort</h4>
              <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
              <p className="text-muted">Wif Air conditioning Kitchen</p>
              <p className="text-muted">Cancellation fexibility availiable</p>
              <p>
                {" "}
                <img className={styles.icon} src={star} alt="" /> 4.9 (25){" "}
                <span>
                  <b>$44/</b>
                </span>
                <span className="text-muted">night $167 total</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ height: "700px", width: "500px", borderRadius: "13px" }}
          class="p-2 bd-highlight"
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyByZWrZ2592mdinAq0v78tMvr1utjEj0Do",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Hotel2;
