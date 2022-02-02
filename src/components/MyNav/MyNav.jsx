import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Popover,
  ListGroupItem,
  ListGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Search,
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  CaretDownFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

import { Col, Row } from "react-bootstrap";
const { REACT_APP_TOKEN } = process.env;

const MyNav = ({ userProfile, setUserProfile }) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [isScroll, setIsscroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY >= 150) {
      setIsscroll(true);
    } else {
      setIsscroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  useEffect(() => {
    getUserInfo();
    //eslint-disable-next-line
  }, []);

  const getUserInfo = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/me";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYzYzIzZjJlOTVjZTAwMTVlZWQ3NTYiLCJpYXQiOjE2NDM4Mzk3MDIsImV4cCI6MTY0NTA0OTMwMn0.SQgmmRgrBpclLnHbb6i9mth7UzflcjSaX3-lQFVeA5U
          `,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUserProfile(userData);
        return userProfile;
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  const mePopover = (
    <Popover id="popover-contained">
      <Popover.Content>
        <ListGroupItem>
          <div className="d-flex modal-profile-container">
            <div>
              <img src={userProfile.image} />
            </div>
            <div className="ml-3">
              <h5>
                {userProfile.name} {userProfile.surname}
              </h5>
              <p>{userProfile.title}</p>
            </div>
          </div>
          <div id="modal-view-profile-btn-container">
            <Link
              to={`/profile/${userProfile._id && userProfile._id}`}
              className="width-100"
            >
              <Button
                id="modal-view-profile-btn"
                variant="outline-primary"
                onClick={() => setShowPopOver(false)}
              >
                View Profile
              </Button>
            </Link>
          </div>
        </ListGroupItem>
        <ListGroup.Item>
          <h5>Account</h5>
          <p className="my-0 pop-menu">Settings &amp; Privacy</p>
          <p className="my-1 pop-menu">Help</p>
          <p className="my-0 pop-menu">Language</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5>Manage</h5>
          <p className="my-0 pop-menu">Posts &amp; Activity</p>
          <p className="mt-1 mb-0 pop-menu">Job Posting Account</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="my-0 pop-menu">Sign Out</p>
        </ListGroup.Item>
      </Popover.Content>
    </Popover>
  );
  return (
    <>
      {isScroll ? (
        <Row className="sticky-top" id="nav__onscroll">
          <Navbar
            className="py-2 sticky-top"
            id="navbar-body"
            bg="white"
            expand="lg"
          >
            <Container>
              <Link to="/">
                <img
                  className="navbar-icon-container d-none d-md-block"
                  id="navbar-logo"
                  src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                  alt="linkedin-logo"
                />
              </Link>
              <Form inline className="d-none d-lg-block">
                <Form.Group id="navbar-search-container">
                  <InputGroup.Prepend>
                    <Search
                      id="navbar-search-icon"
                      className="mx-2"
                      size={16}
                    />
                  </InputGroup.Prepend>
                  <FormControl
                    id="form-control-search-form-control"
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Form.Group>
              </Form>
              <div id="navbar-center" className="ml-auto">
                <Link to="/">
                  <div className="navbar-icon-container mt-2 text-center">
                    <HouseDoorFill size={22} className="navbar-icon" />
                    Home
                  </div>
                </Link>
                <div className="navbar-icon-container mt-2 text-center">
                  <PeopleFill size={22} className="navbar-icon" />
                  My Network
                </div>
                <div className="navbar-icon-container mt-2 text-center">
                  <BriefcaseFill size={22} className="navbar-icon" />
                  Jobs
                </div>
                {/*  <Link to="/messages"> */}
                <div className="navbar-icon-container mt-2 text-center">
                  <ChatDotsFill size={22} className="navbar-icon" />
                  Messaging
                </div>
                {/*   </Link> */}
                <Link to="/notifications">
                  <div className="navbar-icon-container mt-2 text-center">
                    <BellFill size={22} className="navbar-icon" />
                    Notifications
                  </div>
                </Link>
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={mePopover}
                  show={showPopOver}
                >
                  <div
                    className="navbar-icon-container text-center"
                    id="shrinking-btn"
                    onMouseUp={() => setShowPopOver(!showPopOver)}
                  >
                    <img
                      className="navbar-profile-pic"
                      src={userProfile.image}
                      alt="profile"
                    />
                    <div>
                      Me <CaretDownFill />
                    </div>
                  </div>
                </OverlayTrigger>
                <div className="navbar-icon-container navbar-right-section text-center">
                  <Grid3x3GapFill size={22} />
                  <div>
                    Work <CaretDownFill />
                  </div>
                </div>
                <Link to="/premium">
                  <div
                    id="try-premium"
                    className="d-none d-lg-block text-center mt-2"
                  >
                    Try Premium for <br />
                    free
                  </div>
                </Link>
              </div>
            </Container>
          </Navbar>
          <Navbar
            className="py-2 sticky-top"
            id="navbar-body"
            bg="white"
            expand="lg"
          >
            <Container>
              <div className="nav__scrl">
                <Link to="/">
                  <img
                    className="navbar-icon-container d-none d-md-block"
                    id="navbar-logo"
                    src={userProfile.image}
                    alt="linkedin-logo"
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </Link>
                <div>
                  <strong>
                    {" "}
                    {userProfile.name} {userProfile.surname}
                  </strong>
                  <br />
                  <small> {userProfile.title} Frontend Developer</small>
                </div>
              </div>

              <div className="d-flex">
                <Button variant="light" className="mr-2 more__btn text-muted">
                  More
                </Button>
                <Button variant="light" className="mr-2 add__profile__btn">
                  Add profile section
                </Button>
                <Button variant="primary" className="open__to__btn">
                  Open to
                </Button>
              </div>
            </Container>
          </Navbar>
        </Row>
      ) : (
        <Navbar
          className="py-2 sticky-top"
          id="navbar-body"
          bg="white"
          expand="lg"
        >
          <Container>
            <Link to="/">
              <img
                className="navbar-icon-container d-none d-md-block"
                id="navbar-logo"
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                alt="linkedin-logo"
              />
            </Link>
            <Form inline className="d-none d-lg-block">
              <Form.Group id="navbar-search-container">
                <InputGroup.Prepend>
                  <Search id="navbar-search-icon" className="mx-2" size={16} />
                </InputGroup.Prepend>
                <FormControl
                  id="form-control-search-form-control"
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form.Group>
            </Form>
            <div id="navbar-center" className="ml-auto">
              <Link to="/">
                <div className="navbar-icon-container mt-2 text-center">
                  <HouseDoorFill size={22} className="navbar-icon" />
                  Home
                </div>
              </Link>
              <div className="navbar-icon-container mt-2 text-center">
                <PeopleFill size={22} className="navbar-icon" />
                My Network
              </div>
              <Link to="/jobs">
                <div className="navbar-icon-container mt-2 text-center">
                  <BriefcaseFill size={22} className="navbar-icon" />
                  Jobs
                </div>
              </Link>
              <div className="navbar-icon-container mt-2 text-center">
                <ChatDotsFill size={22} className="navbar-icon" />
                Messaging
              </div>
              <Link to="/notifications">
                <div className="navbar-icon-container mt-2 text-center">
                  <BellFill size={22} className="navbar-icon" />
                  Notifications
                </div>
              </Link>
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={mePopover}
                show={showPopOver}
              >
                <div
                  className="navbar-icon-container text-center"
                  id="shrinking-btn"
                  onMouseUp={() => setShowPopOver(!showPopOver)}
                >
                  <img
                    className="navbar-profile-pic"
                    src={userProfile.image}
                    alt="profile"
                  />
                  <div>
                    Me <CaretDownFill />
                  </div>
                </div>
              </OverlayTrigger>
              <div className="navbar-icon-container navbar-right-section text-center">
                <Grid3x3GapFill size={22} />
                <div>
                  Work <CaretDownFill />
                </div>
              </div>
              <Link to="/premium">
                <div
                  id="try-premium"
                  className="d-none d-lg-block text-center mt-2"
                >
                  Try Premium for <br />
                  free
                </div>
              </Link>
            </div>
          </Container>
        </Navbar>
      )}
    </>
  );
};
export default MyNav;
