import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css";
import { Card, Navbar, Button, Accordion } from "react-bootstrap";
import NavBar from "./NavBar.js";
// import Banner from "../assets/images/banner.png";
import item08 from "../assets/images/item-08.png";
import item09 from "../assets/images/item-09.png";
import item10 from "../assets/images/item-10.png";
import monkey from "../assets/images/monkey.png";
import wallet from "../assets/images/wallet.png";
import montono1 from "../assets/images/montono-01.png";
import montono2 from "../assets/images/montono-02.png";
import Banner from "../assets/images/montono.png";
import octopas from "../assets/images/octo.png";
// import Acordion from "./Acordion.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.png";
import team from "../assets/images/team-02.jpg";



function Homepage() {
  return (
    <>
      <div className="bannerwap">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="left-text">
                <span>We are Killa Kangaroos NFT</span>
                <h2>Collect Next Generation NFTs Today</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="banner-button">
                  <a href="#" className="btn-action">
                    Get Connected
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bannerwap-imag">
                <img src={Banner} alt="newimage" className="Banner-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="About">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="bannerwap-imag">
                <Row>
                  <Col lg={6}>
                    <div className="main-box">
                      <div className="rightwap-imag bg1">
                        <img
                          src={item09}
                          alt="newimage2"
                          className="Banner-img"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="rightwap-imag bg2">
                      <img
                        src={item09}
                        alt="newimage2"
                        className="Banner-img"
                      />
                    </div>
                    <div className="rightwap-imag bg3">
                      <img
                        src={item09}
                        alt="newimage2"
                        className="Banner-img"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="left-text left-text2">
                <span>We are Killa Kangaroos NFT</span>
                <h2>Hight Quality NFT Collections</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="banner-button">
                  <a href="#" className="btn-action">
                    Get Connected
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Sales">
        <Container>
          <div className="top-content text-center">
            <span>Our Collection</span>
            <h2>Latest Sales Listings</h2>
          </div>
          <Row>
            <Col lg={3}>
              <div className="sales-main">
                <div className="sales-imag">
                  <img src={monkey} alt="monkey" className="monkey-img" />
                </div>
                <div className="sales-content">
                  <h6>Lorem Ipsum?</h6>
                  <p>Lorem Ipsum is simply dummy</p>
                  <div className="banner-button">
                    <a href="#" className="btn-action2">
                      Get Connected
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="sales-main">
                <div className="sales-imag">
                  <img src={monkey} alt="monkey" className="monkey-img" />
                </div>
                <div className="sales-content">
                  <h6>Lorem Ipsum?</h6>
                  <p>Lorem Ipsum is simply dummy</p>
                  <div className="banner-button">
                    <a href="#" className="btn-action2">
                      Get Connected
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="sales-main">
                <div className="sales-imag">
                  <img src={monkey} alt="monkey" className="monkey-img" />
                </div>
                <div className="sales-content">
                  <h6>Lorem Ipsum?</h6>
                  <p>Lorem Ipsum is simply dummy</p>
                  <div className="banner-button">
                    <a href="#" className="btn-action2">
                      Get Connected
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="sales-main">
                <div className="sales-imag">
                  <img src={monkey} alt="monkey" className="monkey-img" />
                </div>
                <div className="sales-content">
                  <h6>Lorem Ipsum?</h6>
                  <p>Lorem Ipsum is simply dummy</p>
                  <div className="banner-button">
                    <a href="#" className="btn-action2">
                      Get Connected
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Portfolio">
        <Container>
          <div className="top-content text-center">
            <span>Join NFT Portfolio</span>
            <h2>Become a Killa Kangarros Player Now</h2>
          </div>
          <Row>
            <Col lg={6}>
              <div className="join-main">
                <div className="join-wallet">
                  <img src={wallet} alt="wallet" className="wallet" />
                </div>
                <div className="wallet-pay">
                  <span>Step 01</span>
                  <h2>Connect Your Wallet</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="join-main">
                <div className="join-wallet">
                  <img src={wallet} alt="wallet" className="wallet" />
                </div>
                <div className="wallet-pay">
                  <span>Step 02</span>
                  <h2>Buy Your NFT</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="join-main">
                <div className="join-wallet">
                  <img src={wallet} alt="wallet" className="wallet" />
                </div>
                <div className="wallet-pay">
                  <span>Step 03</span>
                  <h2>Create Collection</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="join-main">
                <div className="join-wallet">
                  <img src={wallet} alt="wallet" className="wallet" />
                </div>
                <div className="wallet-pay">
                  <span>Step 04</span>
                  <h2>Sell Your NFT</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Portfolio">
        <Container fluid>
        <div className="top-content text-center">
            <span>NFT</span>
            <h2>Killa Kangaroos NFT</h2>
          </div>
          <Row>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono1} alt="montono" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono2} alt="montono2" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono1} alt="montono" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono2} alt="montono2" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono1} alt="montono" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono2} alt="montono2" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono1} alt="montono" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="killocard-main">
                <div className="killocard-imag">
                  <img src={montono2} alt="montono2" className="montono" />
                </div>
                <div className="killocard-content">
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="timeline-wap">
        <Container fluid>
          <div className="top-content text-center">
            <span>Road Map</span>
            <h2>The Journey of Killa Kangaroos NFT</h2>
          </div>
          <Row>
            <Col lg={5}>
              <div className="Road-imag">
                <img src={octopas} alt="octopas" className="octopas" />
              </div>
            </Col>
            <Col lg={7}>
              <div className="Road-contentmian">
                <div className="road-content">
                  <h2>Phase 1</h2>
                  <p>Completed</p>
                </div>
                <div className="phase-wap">
                  <p>Phase 1 is to bring together a team of lead developers, designers and staff members.</p>
                  <ul>
                    <li>100 Prime and 1400 OG members have been invited to the ASTRALS private discord, and we are well on our way to filling our whitelist roster.</li>
                    <li>The art for all 10,000 ASTRALS will be finalized.</li>
                  </ul>

                </div>

              </div>
              <div className="Road-contentmian">
                <div className="road-content">
                  <h2>Phase 2</h2>
                  <p>Completed</p>
                </div>
                <div className="phase-wap">
                  <p>Phase 1 is to bring together a team of lead developers, designers and staff members.</p>
                  <ul>
                    <li>100 Prime and 1400 OG members have been invited to the ASTRALS private discord, and we are well on our way to filling our whitelist roster.</li>
                    <li>The art for all 10,000 ASTRALS will be finalized.</li>
                  </ul>

                </div>

              </div>
              <div className="Road-contentmian">
                <div className="road-content">
                  <h2>Phase 3</h2>
                  <p>Completed</p>
                </div>
                <div className="phase-wap">
                  <p>Phase 1 is to bring together a team of lead developers, designers and staff members.</p>
                  <ul>
                    <li>100 Prime and 1400 OG members have been invited to the ASTRALS private discord, and we are well on our way to filling our whitelist roster.</li>
                    <li>The art for all 10,000 ASTRALS will be finalized.</li>
                  </ul>

                </div>

              </div>
              <div className="Road-contentmian">
                <div className="road-content">
                  <h2>Phase 4</h2>
                  <p>Completed</p>
                </div>
                <div className="phase-wap">
                  <p>Phase 1 is to bring together a team of lead developers, designers and staff members.</p>
                  <ul>
                    <li>100 Prime and 1400 OG members have been invited to the ASTRALS private discord, and we are well on our way to filling our whitelist roster.</li>
                    <li>The art for all 10,000 ASTRALS will be finalized.</li>
                  </ul>

                </div>

              </div>
              <div className="Road-contentmian">
                <div className="road-content">
                  <h2>Phase 5</h2>
                  <p>Completed</p>
                </div>
                <div className="phase-wap">
                  <p>Phase 1 is to bring together a team of lead developers, designers and staff members.</p>
                  <ul>
                    <li>100 Prime and 1400 OG members have been invited to the ASTRALS private discord, and we are well on our way to filling our whitelist roster.</li>
                    <li>The art for all 10,000 ASTRALS will be finalized.</li>
                  </ul>

                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="team-wap">
        <Container>
          <div className="top-content text-center">
            <span>Team Members</span>
            <h2>Our Amazing Team Members</h2>
          </div>
          <Row>
            <Col lg={3}>
              <div class="team-box">
                <div class="img-team">
                  <img src={team} alt="team" className="team" />
                </div>
                <div class="team-info">
                  <a href="#" class="h5">Mike Anderson</a>
                  <p class="fs-16">Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div class="team-box">
                <div class="img-team">
                  <img src={team} alt="team" className="team" />
                </div>
                <div class="team-info">
                  <a href="#" class="h5">Mike Anderson</a>
                  <p class="fs-16">Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div class="team-box">
                <div class="img-team">
                  <img src={team} alt="team" className="team" />
                </div>
                <div class="team-info">
                  <a href="#" class="h5">Mike Anderson</a>
                  <p class="fs-16">Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div class="team-box">
                <div class="img-team">
                  <img src={team} alt="team" className="team" />
                </div>
                <div class="team-info">
                  <a href="#" class="h5">Mike Anderson</a>
                  <p class="fs-16">Founder &amp; CEO</p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="accordian-wap">
        <Container>
          <div className="top-content text-center">
            <span>FAQ</span>
            <h2>Frequently AksedQuestions</h2>
          </div>
          <Row>
            <Col lg={12}>
              <Accordion >

                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>

      </div>


      <div className="timeline-roadmap">
        <div className="timeline"> <img src={logo} alt="logo" className="logo-img" /></div>
        <div className="roadmap"><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit ani

        </p></div>
      </div>
    </>
  );
}

export default Homepage;
