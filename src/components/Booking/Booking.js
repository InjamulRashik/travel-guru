import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Booking.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={styles.body}>
      <Header />
      <div className="container">
        <div className={`row ${styles.homeContent}`}>
          <div className={`col-md-6 ${styles.info}`}>
            <h1 className={styles.h1}>Cox's Bazar</h1>
            <p className={styles.p}>
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
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
                ></text>
              </div>
              <div>
                <label for="exampleInputEmail1">Destination</label>
                <text
                  style={{ background: "lightgrey" }}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></text>
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
                <Link to="/login">
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

export default Booking;
