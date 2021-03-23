import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/contact.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";

function Contact() {
    return (
      <div id="contactBody">
        <Container>
          <header>
            <h1>Contact</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section>
            <Row className="contacts">
              <Col className="cont" lg="4" md="4">
                <div>
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>+91 98765-43210</p>
                </div>
              </Col>
              <Col className="cont" lg="4" md="4">
                <div>
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>A.B. Road, Indore</p>
                </div>
              </Col>
              <Col className="cont" lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>query@travelly.in</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
        <div id="footerBody">
        <Container>
          <header>
            <p>
              <b>CAN'T WAIT TO SEE THE BEAUTY OF NATURE</b>
            </p>
            <p>
              <b>CONNECT WITH US</b>
            </p>
          </header>
          <footer>
            <Row className="contacts">
              <Col className="cont" md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://facebook.com">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col className="cont" md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://twitter.com">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col className="cont" md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://linkedin.com">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col className="cont" md="3" xs="6">
                <div>
                  <a href="https://instagram.com">
                    <Instagram width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            
          </footer>
        </Container>
      </div>
      </div>
    );
  
}

export default Contact;