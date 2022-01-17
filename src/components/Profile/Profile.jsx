import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import Activity from "../Activity/Activity";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Licenses from "../Licenses/Licenses";

import "./Profile.css";
import UsereProfile from "./UsereProfile";
const Profile = ({ userProfile, setUserProfile }) => {
  return (
    <Col className="home__wrap ">
      <UsereProfile userProfile={userProfile} setUserProfile={setUserProfile} />

      <FeaturedPosts />
      <Activity />
      <Experience />
      <Education />
      <Licenses />
    </Col>
  );
};
export default Profile;
