import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Sajek from "../../images/Sajek.png";
import Sreemongol from "../../images/Sreemongol.png";
import Sundorbon from "../../images/sundorbon.png";
import styles from "./Home.module.css";
import Booking from "../Booking/Booking";
import { placeData } from "../../fakeData/placeData";

const Home = () => {
  const history = useHistory();
  const handleBook = () => {
    history.push(`/booking/${key}`);
  };
  const [key, setKey] = useState("1");
  const [heading, setHeading] = useState("Cox's Bazar");
  const [para, setPara] = useState(
    "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly forits long natural sandy beach, and it ..."
  );
  const [button, setButton] = useState("Book for Cox's Bazar");

  const setState = (key, heading, para, button) => {
    setKey(key);
    setHeading(heading);
    setPara(para);
    setButton(button);
  };

  return (
    <div className={styles.body}>
      <Header />
      <div className="container">
        <div className={`row ${styles.homeContent} d-flex align-items-center`}>
          <div className="col-md-6 info">
            <h1 className={styles.h1}>{heading}</h1>
            <p className={styles.p}>{para}</p>

            <button
              onClick={handleBook}
              style={{
                background: "#F9A51A",
                fontWeight: "bold",
                borderRadius: "5px",
                marginBottom: "50px",
              }}
              className="btn"
            >
              {button}
            </button>
            <br />
          </div>
          <div
            className={`col-md-6 ${styles.places} d-flex justify-content-between`}
          >
            <img
              onClick={handleBook}
              onMouseEnter={() =>
                setState(
                  "1",
                  "Cox's Bazar",
                  "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly forits long natural sandy beach, and it ...",
                  "Book for Cox's Bazar"
                )
              }
              src={Sajek}
              alt=""
            />
            <img
              onClick={handleBook}
              onMouseEnter={() =>
                setState(
                  "2",
                  "Sreemangal",
                  "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned ...",
                  "Book for Sreemangal"
                )
              }
              src={Sreemongol}
              alt=""
            />
            <img
              onClick={handleBook}
              onMouseEnter={() =>
                setState(
                  "3",
                  "Sundarbans",
                  "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River ...",
                  "Book for Sundarbans"
                )
              }
              src={Sundorbon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
