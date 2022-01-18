import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import Activity from "../Activity/Activity";
import Education from "../Education/Education";
import { useEffect } from "react";
import { useParams } from "react-router";
import Experiences from "../Experience/Experiences";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Licenses from "../Licenses/Licenses";

import "./Profile.css";
import UsereProfile from "./UsereProfile";
const Profile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <Col className="home__wrap pr-5 mr-5">
      <UsereProfile userProfile={userProfile} setUserProfile={setUserProfile} />
      <FeaturedPosts />
      <Activity />
      <Experiences />
      <Education />
      <Licenses />
    </Col>
  );
};
export default Profile;
