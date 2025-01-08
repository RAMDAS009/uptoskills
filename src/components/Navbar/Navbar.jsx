import React from "react";
import "./Navbar.css";
import { Circle } from "rc-progress";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name-card">
        <div className="profile-pic">
          <div className="progress-bar" style={{ position: "relative" }}>
            <Circle percent={66} strokeWidth={8} strokeColor="green" />
          </div>
          <img
            src="./images/man-avatar.png"
            alt=""
            style={{
              width: "71px",
              height: "70px",
              "border-radius": "50%",
              backgroundPosition: "center",
              "background-size": "cover",
              position: "absolute",
              top: "5%",
              left: "0%",
            }}
          />
        </div>
        <div className="mail">
          <h2>Ramdas Sakpal</h2>
          <h3>ramdas@gamil.com</h3>
          <h4>Must Complete Your Profile </h4>
          <div className="us-coins">
            <h5>US COINS :- 100</h5>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="stay">
          <h3>Stay On The Topic : Topic Name</h3>
        </div>
        <div className="btns">
          <button>Total Learninig</button>
          <button>Total Earning</button>
          <button>Total Event Participeted</button>
        </div>
      </div>
      <div className="box-3">
        <div className="badges">
          <h3>MY BADGES</h3>
        </div>
        <div className="imgs">
          <img src="./images/bronze-badge.png" alt="" />
          <img src="./images/silver-badge.png" alt="" />
          <img src="./images/gold-badge.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
