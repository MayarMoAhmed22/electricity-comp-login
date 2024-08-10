import React from "react";
import logo from "../../Assets/logo2.jpeg";
import "./SplashScreen.css";
export default function SplashScreen() {
  return (
    <div className="splash-screen ">
      <img src={logo} alt="Company Logo" className="logo" />
    </div>
  );
}
