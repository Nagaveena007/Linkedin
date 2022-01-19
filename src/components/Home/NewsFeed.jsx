import UsereProfile from "../Profile/UsereProfile";
import { Col } from "react-bootstrap";
const NewsFeed = ({ userProfile, setUserProfile }) => {
  return (
    <Col className="home__wrap pr-5">
      <UsereProfile userProfile={userProfile} setUserProfile={setUserProfile} />
    </Col>
  );
};

export default NewsFeed;
