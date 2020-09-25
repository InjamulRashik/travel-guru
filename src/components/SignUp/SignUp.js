import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import styles from "./SignUp.module.css";
import HeaderBlack from "../Header/HeaderBlack";
import { Link, useHistory, useLocation } from "react-router-dom";
import fbIcon from "../../icons/fb.png";
import gIcon from "../../icons/google.png";
import { UserContext } from "../../App";

const SignUp = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }

  const [user, setUser] = useState({
    isSignedIn: false,
    email: "",
    password: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          if ((newUserInfo.success = true)) {
            if (window.confirm("Sign up Successful")) {
              history.push("/login");
            }
          }
          setUser(newUserInfo);
        })
        .catch(function (error) {
          // Handle Errors here.
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setUser(newUserInfo);
          // ...
        });
    }
    e.preventDefault();
  };
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
        var token = result.credential.accessToken;

        var user = result.user;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        // ...
      });
  };
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
        <div className={`${styles.signUpForm}`}>
          <form onSubmit={handleSubmit} className="container">
            <label>
              <h1>
                <h1>Sign Up</h1>
              </h1>
            </label>{" "}
            <div class="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                class="form-control"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                class="form-control"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Username or Email</label>
              <input
                onBlur={handleBlur}
                name="email"
                type="email"
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
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                required
              />
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
              Create an account
            </button>{" "}
            <p style={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link to="/login">
                <span style={{ color: "#F9A51A" }}>Login</span>{" "}
              </Link>
            </p>
          </form>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>{user.error}</p>
        <br />
        <button className={styles.gButton} onClick={handleSignIn}>
          <img src={gIcon} alt="" />
          Continue with Google{" "}
        </button>{" "}
        <br />
        <button className={styles.gButton} onClick={handleFbSignIn}>
          <img src={fbIcon} alt="" />
          Continue with Facebook{" "}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
