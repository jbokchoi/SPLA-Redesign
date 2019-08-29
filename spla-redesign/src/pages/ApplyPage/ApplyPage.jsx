import React from "react";
import "./ApplyPage.css";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const ApplyPage = props => {
  return (
    <div>
      <Header />
      <Row>
        <Col>
          <h2
            style={{
              fontSize: "30px",
              textAlign: "center",
              marginTop: "10vmin"
            }}
          >
            WHAT DO YOU NEED?
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <div className="carImg-container">
            <img
              className="img-fluid"
              src="https://i.imgur.com/GMztFRe.png"
              alt="car-img"
              style={{maxWidth: '30%', marginBottom: '30px',  marginTop: '30px'}}
            />
          </div>
          <Link id="btnColor-orange" className="btn mx-auto" to="/applicationpage" style={{maxWidth: '60%'}}>
            Apply to Safe Parking
          </Link>
          <br />
          <p className="home-about-msg" style={{ textAlign: "center" }}>
            Apply for a spot in one of <br></br> our Safe Parking LA lots{" "}
          </p>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <div className="chatImg-container">
            <img
              className="img-fluid"
              src="https://i.imgur.com/bmcQ7o9.png"
              alt="chat-box"
              style={{maxWidth: '37%', marginBottom: '30px', marginTop: '30px'}}
            />
          </div>
          <Link className="btn mx-auto" to="/resources" style={{maxWidth: '60%'}}>
            Resources
          </Link>
          <br />
          <p className="home-about-msg" style={{ textAlign: "center" }}>
            Find services and <br></br> resources in your area
          </p>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="home-about-msg" style={{ textAlign: "center" , marginTop: '30px', marginBottom: '30px'}}>
            * For medical emergencies, please call 911.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ApplyPage;
