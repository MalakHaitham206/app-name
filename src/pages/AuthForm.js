import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style folder/AuthForm.css"
const AuthForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password && userData.confirmPassword) {
      navigate("/Home");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };
  const handleSignInSubmit = (event) => {
    event.preventDefault();
    if (UserSign.email && UserSign.password) {
      navigate("/Home");
      console.log(`user: ${UserSign.email} password: ${UserSign.password}`)
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [userData, setUserData] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [UserSign, setUserSign] = useState({
    email: "",
    password: "",
  });

  const [userDataErrors, setUserDataErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // Handle input changes and validate fields dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input belongs to the sign-up or sign-in form
    if (name === "email" || name === "password") {
      setUserSign((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Perform validation for sign-up form only
    if (name !== "email" && name !== "password") {
      switch (name) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          setUserDataErrors((prevErrors) => ({
            ...prevErrors,
            emailError: emailRegex.test(value) ? "" : "Invalid email format.",
          }));
          break;

        case "password":
          const passwordRegex = /^[A-Za-z\d@$!%*?&]{6,}$/;
          setUserDataErrors((prevErrors) => ({
            ...prevErrors,
            passwordError: passwordRegex.test(value)
              ? ""
              : "Password must be at least 6 characters and include letters or special characters.",
          }));
          break;

        case "confirmPassword":
          setUserDataErrors((prevErrors) => ({
            ...prevErrors,
            confirmPasswordError:
              value === userData.password ? "" : "Passwords do not match.",
          }));
          break;

        default:
          break;
      }
    }
  };

  const validateSignUpForm = (e) => {
    e.preventDefault();

    // Check if any errors exist before submission
    if (
      userDataErrors.emailError ||
      userDataErrors.passwordError ||
      userDataErrors.confirmPasswordError ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Form submitted successfully!");
  };

  const handleSignUpClick = () => setIsRightPanelActive(true);
  const handleSignInClick = () => setIsRightPanelActive(false);

  return (
    <div
      className={`container ${isRightPanelActive ? "right-panel-active" : ""
        }`}
    >
      {/* Sign-Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`form-control ${userData.email == null ? "" :
              userDataErrors.emailError ? "is-invalid" : "is-valid"
              }`}
            value={userData.email}
            onChange={handleInputChange}
          />
          {userDataErrors.emailError && (
            <div className="invalid-feedback">{userDataErrors.emailError}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`form-control ${userData.password == null ? "" :
              userDataErrors.passwordError ? "is-invalid" : "is-valid"
              }`}
            value={userData.password}
            onChange={handleInputChange}
          />
          {userDataErrors.passwordError && (
            <div className="invalid-feedback">{userDataErrors.passwordError}</div>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat Password"
            className={`form-control ${userData.confirmPassword == null ? "" :
              userDataErrors.confirmPasswordError ? "is-invalid" : "is-valid"
              }`}
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          {userDataErrors.confirmPasswordError && (
            <div className="invalid-feedback">
              {userDataErrors.confirmPasswordError}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#F35F6A", border: "none" }}

          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Sign-In Form */}
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignInSubmit}>
          <h1>Sign In</h1>
          <input type="email"
            name="email"
            placeholder="Email"
            value={UserSign.email}
            onChange={handleInputChange} />
          <input type="password"
            name="password"
            placeholder="Password"
            value={UserSign.password}
            onChange={handleInputChange} />
          <a href="#">Forgot Your Password?</a>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "#F35F6A", color: "#F9F5E7" }}
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 style={{ color: "#F4F0E2" }}>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button
              className="ghost btn btn-secondary"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 style={{ color: "#F4F0E2" }}>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button
              className="ghost btn btn-secondary"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
