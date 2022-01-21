import "../Sidebar/Sidebar.css";
import "./HomeRightSidebar/LeftSidebar.css";
import { useState } from "react";
import { Col } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import StartAPost from "../FeaturedPosts/StartAPost";
import UserPosts from "./UserPosts";
import RightSidebar from "./HomeRightSidebar/RightSidebar";
import LeftSidebar from "./HomeRightSidebar/LeftSidebar";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  const [postsAdded, setPostsAdded] = useState(0);

  return (
    <>
      <div id="left-sidebar">
        <LeftSidebar />
      </div>

      <Col className="home__wrap pr-5">
        <StartAPost />

        <UserPosts postsAdded={postsAdded} />
        <NewsFeed userProfile={userProfile} setUserProfile={setUserProfile} />
      </Col>
      <div id="sidebar" className=" mt-4">
        <RightSidebar />
      </div>
    </>
  );
};
export default DefaultFeeds;
