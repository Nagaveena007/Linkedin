import { Card, ListGroup, List, Col, Row } from "react-bootstrap";
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import "./StartAPost.css";
const HomeLeftSidebar = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Row style={{ width: "18rem", marginLeft: "0px" }}>
        <Card>
          <Card.Header className="text-center" style={{ height: "3rem" }}>
            {/*  <img
            src="https://media-exp1.licdn.com/dms/image/C5616AQHH0RXx4UVLWQ/profile-displaybackgroundimage-shrink_350_1400/0/1638482874027?e=1648080000&v=beta&t=ubcbUCUGYkOBc5UaoLuGh2mYr4L-d1AmBJVqPUzm2eQ"
            alt=""
            style={{ objectFit: "contain" }}
          /> */}
            <img
              className="profile-image-posts"
              src={userProfile?.image}
              alt=""
            />
          </Card.Header>
          <Card.Title className="text-center mt-5">
            {userProfile?.name} {userProfile?.surname}
          </Card.Title>
          <Card.Text className="text-secondary text-center">
            <p>Frontend Developer Student at Strive School | Y Combinators</p>
          </Card.Text>
          <ListGroup variant="flush" className="d-flex">
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 mt-2 text_muted">
                Who viewed your profile
              </p>
              <p className="num_prof">170</p>
            </div>
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 text_muted ">Views of your post</p>
            </div>
            <p className="num_post">574</p>
          </ListGroup>
          <ListGroup variant="flush">
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 mt-2  text_muted">
                Access exclusive tools & insights
              </p>
              <p className="pl-5 pt-1  text-dark">Try Premium for free</p>
            </div>
          </ListGroup>
          <ListGroup variant="flush">
            <div className="d-flex">
              <BsBookmarkFill className="saved" />{" "}
              <p className="pl-2"> My items</p>
            </div>
          </ListGroup>
        </Card>
        <Card
          id="right-sidebar__right"
          className="pt-2 px-0 mt-3"
          style={{ borderRadius: "7px", width: "18rem", marginLeft: "5.5em" }}
        >
          <Card.Title className="my-auto px-3">Recent </Card.Title>

          <Card.Body id="follow" className="px-3">
            <Row>
              <Col className="d-flex flex-row align-items-center">
                <i className="bi bi-archive-fill"></i>
                <p className="mb-0 pl-2">Free course of web marketing...</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column my-2">
                <a href=""> Groups </a>
                <span className="d-flex flex-row">
                  <a href="" className="my-2 mr-auto">
                    Events
                  </a>
                  <i className="bi bi-plus-lg align-self-center"></i>
                </span>
                <a href=""> Followed Hashtags </a>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="pt-2 pb-0 text-center">
            <p>Discover more</p>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default HomeLeftSidebar;
