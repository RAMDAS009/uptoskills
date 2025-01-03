import React from "react";
import "./MenuCard.css";
import { Circle } from "rc-progress";
import { Link } from "react-router-dom";

const MenuCard = () => {
  return (
    <div className="main">
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
        </div>
      </div>
      <h4>Complete Your Profile </h4>
      <div className="menu-card">
        <div className="item">
          <Link to="/" className="divclass">
            <img src="./images/user-plus.png" alt="" />
            <p>Registration</p>
          </Link>
          <Link to="refer" className="divclass">
            <img src="./images/refer-and-earn.png" alt="" />
            <p>Refer And Earn</p>
          </Link>

          <Link to="award" className="divclass">
            <img src="./images/us-awards.png" alt="" />
            <p>US Awards</p>
          </Link>

          <div className="divclass">
            <img src="./images/vote.png" alt="" />
            <p>Voting For Award</p>
          </div>

          <div className="divclass">
            <img src="./images/competition.png" alt="" />
            <p>Compititions</p>
          </div>

          <div className="divclass">
            <img src="./images/badge.png" alt="" />
            <p>My Badge</p>
          </div>

          <Link to="jobs" className="divclass">
            <img src="./images/new-job.png" alt="" />
            <p>My Jobs</p>
          </Link>

          <div className="divclass">
            <img src="./images/internship.png" alt="" />
            <p>My Internships</p>
          </div>

          <div className="divclass">
            <img src="./images/courses.png" alt="" />
            <p>Enrolled Courses</p>
          </div>

          <div className="divclass">
            <img src="./images/upcoming-events.png" alt="" />
            <p>Upcoming Events</p>
          </div>

          <div className="divclass">
            <img src="./images/recent.png" alt="" />
            <p>Recently Viewed</p>
          </div>

          <div
            style={{ borderBottom: "2px solid rgb(216, 214, 214)" }}
            className="divclass"
          >
            <img src="./images/certificate.png" alt="" />
            <p>Certificates </p>
          </div>

          <div className="divclass">
            <img src="./images/account-setting.png" alt="" />
            <p>Account Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
