import { Link } from "react-router-dom";
import UsereProfile from "../Profile/UsereProfile";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
import { useState } from "react";
import { Col } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import StartAPost from "../FeaturedPosts/StartAPost";
import UserPosts from "./UserPosts";
import RightSidebar from "./HomeRightSidebar/RightSidebar";
import HomeLeftSidebar from "../FeaturedPosts/HomeLeftSidebar";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  const [postsAdded, setPostsAdded] = useState(0);

  return (
    <>
      <Col md={3} style={{ marginTop: "25px", marginLeft: "75px" }}>
        <HomeLeftSidebar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Col>

      <Col className="home__wrap pr-5" style={{ marginTop: "-490px" }}>
        <StartAPost />

        <UserPosts postsAdded={postsAdded} />
        <NewsFeed userProfile={userProfile} setUserProfile={setUserProfile} />
      </Col>
      <Col md={3} id="sidebar" className="" style={{ marginTop: "25px" }}>
        <RightSidebar />
      </Col>
    </>
  );
};
export default DefaultFeeds;
