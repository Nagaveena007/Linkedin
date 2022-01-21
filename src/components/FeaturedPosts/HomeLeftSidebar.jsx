import { Card, ListGroup, List } from "react-bootstrap";
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import "./StartAPost.css";
const HomeLeftSidebar = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Card>
        <Card.Header className="text-center" style={{ height: "3rem" }}>
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
