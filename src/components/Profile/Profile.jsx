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
import Skills from "../Skills/Skills"

const Profile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <Col className="home__wrap">
      <UsereProfile userProfile={userProfile} setUserProfile={setUserProfile} />
      <FeaturedPosts />
      <Activity />
      {/*       <Experience userProfile={userProfile} setUserProfile={setUserProfile} />
       */}{" "}
      {/* <Experiences  userProfile={userProfile} setUserProfile={setUserProfile}/> */}
      <Education />
      <Licenses />
      <Skills />
    </Col>
  );
};
export default Profile;
