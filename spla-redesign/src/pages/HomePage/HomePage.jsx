import React from "react";

import "./HomePage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const HomePage = props => {
  return (
    <div>
      <div className="home-main-img">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ background: "none" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" style={{ color: "white" }} />
          </button>
          <Link className="navbar-brand" to="/">
            <img
              src="//static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/58eeee60414fb57371fdf24d/1561049620762/?format=1500w"
              alt="Safe Parking LA"
              className="Header-branding-logo"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/apply"
                  style={{
                    color: "rgb(255, 255, 255)",
                    textAlign: "center",
                    backgroundColor: "rgba(240, 130, 34, 0.3)"
                  }}
                >
                  APPLY<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.3"
                  }}
                >
                  About <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/resources"
                  style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.3"
                  }}
                >
                  Resources <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la"
                  style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.3"
                  }}
                >
                  Donate<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/contactus"
                  style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.3"
                  }}
                >
                  Contact Us<span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Row className="site-content-row justify-context-xs-center">
          <Col xs={12} lg={{ span: 5, offset: 1 }} className="home-welcome">
            <h3>Welcome!</h3>
            <p className="home-welcome-msg">
                Nobody plans to be homeless. <br />
                You’ve taken the first step towards help. <br />
                You’re on the right track
            </p>
            <Link to="/apply" className="btn-org">
                  Get Started
            </Link>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={12} className="home-about">
          <h3>About</h3>
          <p className="home-about-msg">
            Safe Parking programs are a safe and legal homelessness intervention
            to stabilize and connect to resources for people who are living in
            their vehicles. <br /> <br />
            All program locations include access to a restroom facility and the
            security of a guard. Please begin the application by filling out the
            interest form provided or call/text <br />{" "}
            <span className="phone-num">213-793-8493</span>
          </p>
          <Col xs={{ span: 10, offset: 1 }}>
            <Link to="/about" className="btn">
              About
            </Link>
          </Col>
        </Col>
      </Row>
      <Row>
        <img
          src="https://i.imgur.com/TPc9Dc0.jpg"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <Col xs={12} className="home-story">
          <p className="story">
            In August 2018, after two years of living in their car, Lawrence and
            Carla McCue finally picked up the keys to their very own apartment.
          </p>
          <Col xs={{ span: 10, offset: 1 }}>
            <Link to="/stories" className="btn">
              Read More
            </Link>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
