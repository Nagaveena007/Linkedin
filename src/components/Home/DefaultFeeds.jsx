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

        <UserPosts postsAdded={postsAdded} />
        <NewsFeed userProfile={userProfile} setUserProfile={setUserProfile} />
      </Col>
      <div id="sidebar" className=" mt-4">
        <Sidebar />
      </div>
    </>
  );
};
export default DefaultFeeds;
