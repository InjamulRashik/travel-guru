import React from "react";
import logo from "../../Logo.png";

const Header = () => {
  return (
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
            <input
              style={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                marginRight: "50px",
              }}
              type="text"
              name=""
              id=""
              placeholder="🔍Search destination"
            />{" "}
            <ul className="navbar-nav">
              <li
                style={{
                  marginRight: "50px",
                  fontWeight: "bold",
                }}
                className="nav-item "
              >
                <a style={{ color: "white" }} className="nav-link" href="#">
                  News
                </a>
              </li>
              <li
                style={{ marginRight: "50px", fontWeight: "bold" }}
                className="nav-item"
              >
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Destination
                </a>
              </li>
              <li
                style={{ marginRight: "50px", fontWeight: "bold" }}
                className="nav-item"
              >
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li
                style={{ marginRight: "50px", fontWeight: "bold" }}
                className="nav-item"
              >
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Contact
                </a>
              </li>
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
                Login
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
