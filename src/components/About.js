import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";
import { ReactComponent as Award } from "../assets/svg/award.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";

function About(){
    return (
      <div id='about'>
        <div className="subComponent" id="aboutBody">
          <Container>
            <header >
              <h1>About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section >
              <Row className='services'>
                <Col className="serv" lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col className="serv" lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col className="serv" lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col className="serv" lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
}

export default About;
