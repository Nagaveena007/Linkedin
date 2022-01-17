import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";

import "./Profile.css";
import UsereProfile from "./UsereProfile";
const Profile = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Col className="home__wrap">
        <UsereProfile
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
        <FeaturedPosts />
      </Col>
    </>
  );
};
export default Profile;
