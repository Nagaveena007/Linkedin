import { Link } from "react-router-dom";
import UsereProfile from "../Profile/UsereProfile";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
import { useState } from "react";

import { Col } from "react-bootstrap";

import NewsFeed from "./NewsFeed";
import StartAPost from "../FeaturedPosts/StartAPost";
import UserPosts from "./UserPosts";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  const [postsAdded, setPostsAdded] = useState(0);

  return (
    <>
      <Col className="home__wrap pr-5">
        <StartAPost />
        <NewsFeed userProfile={userProfile} setUserProfile={setUserProfile} />
        <UserPosts postsAdded={postsAdded} />
      </Col>
      <div id="sidebar" className="pl-5 ml-5 mt-4">
        <Sidebar />
      </div>
    </>
  );
};
export default DefaultFeeds;
