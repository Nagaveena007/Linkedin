import { Card, ListGroup, List } from "react-bootstrap";
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import "./StartAPost.css";
const HomeLeftSidebar = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
            <p className="pl-3 pt-1 mt-2 text_muted">Who viewed your profile</p>
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
    </>
  );
};

export default HomeLeftSidebar;
