import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Booking.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { placeData } from "../../fakeData/placeData";

const Booking3 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [origin, setOrigin] = useState("Dhaka");
  const [destination, setDestination] = useState("Sundarbans");
  return (
    <div className={styles.body}>
      <Header />
      <div className="container">
        <div className={`row ${styles.homeContent}`}>
          <div className={`col-md-6 ${styles.info}`}>
            <h1 className={styles.h1}>Sundarbans</h1>
            <p className={styles.p}>
              Sundarbans is a mangrove area in the delta formed by the
              confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay
              of Bengal. It spans from the Hooghly River in India's state of
              West Bengal to the Baleswar River in Bangladesh.
            </p>

            <br />
          </div>
          <div className={`col-md-6 ${styles.form}`}>
            <form>
              <div>
                <label for="">Origin</label>
                <text
                  style={{ background: "lightgrey" }}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                >
                  {origin}
                </text>
              </div>
              <div>
                <label for="exampleInputEmail1">Destination</label>
                <text
                  style={{ background: "lightgrey" }}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                >
                  {destination}
                </text>
              </div>
              <div></div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <label for="exampleInputEmail1">From</label> <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="p-2">
                  <label for="exampleInputEmail1">To</label> <br />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>{" "}
              <br />
              <div className="d-flex justify-content-center">
                <Link to="/hotel3">
                  <button
                    type="button"
                    value=""
                    style={{
                      background: "#F9A51A",
                      fontWeight: "bold",
                      borderRadius: "5px",
                      paddingLeft: "200px",
                      paddingRight: "200px",
                    }}
                    className="btn"
                  >
                    Start Booking
                  </button>{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking3;
