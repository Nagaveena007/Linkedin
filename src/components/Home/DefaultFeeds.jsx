import { Link } from "react-router-dom";
import UsereProfile from "../Profile/UsereProfile";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
import { Col } from "react-bootstrap";

import NewsFeed from "./NewsFeed";
import StartAPost from "../FeaturedPosts/StartAPost";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Col className="home__wrap pr-5">
        <StartAPost />
        <NewsFeed userProfile={userProfile} setUserProfile={setUserProfile} />
      </Col>
      <div id="sidebar" className="pl-5 ml-5 mt-4">
        <Sidebar />
      </div>
    </>
  );
};
export default DefaultFeeds;
