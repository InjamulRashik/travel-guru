import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import styles from "./Login.module.css";
import HeaderBlack from "../Header/HeaderBlack";
import { Link, useHistory, useLocation } from "react-router-dom";
import fbIcon from "../../icons/fb.png";
import gIcon from "../../icons/google.png";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {});
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch(function (error) {
          // Handle Errors here.
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          alert(error.message);
          setUser(newUserInfo);
          // ...
        });
    }
    e.preventDefault();
  };
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      isFieldValid = isPasswordValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  return (
    <div>
      <HeaderBlack></HeaderBlack>
      <div className="container d-flex flex-column justify-content-around">
        <div className={`${styles.loginForm}`}>
          <form onSubmit={handleSubmit} className="container">
            <label>
              <h1>
                <h1>Login</h1>
              </h1>
            </label>{" "}
            <div class="form-group">
              <label for="exampleInputEmail1">Username or Email</label>
              <input
                onBlur={handleBlur}
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                onBlur={handleBlur}
                name="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <div class="d-flex justify-content-between">
                <label class="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>{" "}
                <label style={{ color: "#F9A51A" }}>Forget Password</label>
              </div>
            </div>
            <button
              type="submit"
              class="btn form-control"
              style={{
                background: "#F9A51A",
                fontWeight: "bold",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
              Login
            </button>{" "}
            <p style={{ textAlign: "center" }}>
              Don’t have an account?{" "}
              <Link to="/signup">
                <span style={{ color: "#F9A51A" }}>Create an account</span>{" "}
              </Link>
            </p>
          </form>
        </div>
        <br />
        <button className={styles.gButton} onClick={handleSignIn}>
          <img src={gIcon} alt="" />
          Continue with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
