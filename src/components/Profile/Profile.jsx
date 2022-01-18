<<<<<<< Updated upstream
=======
import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import "./Profile.css";
const Profile = ({userProfile}) => {
  return (
    <>
      <Container
        className="home__wrap pb-4 mt-5"
        style={{ background: "#fff" }}
      >
        <Row className="profile__bg">
          <img src={userProfile.image} alt='avatar'/>
        </Row>
        <Row className="profile__photo ml-1">
          <img src={userProfile.image} className="img-fluid" />
        </Row>

        <Row className=" user__detail ">
          <Col xs={12} md={8}>
            <h4 className="name mb-0">
              {userProfile.name} {userProfile.surname}
              <small style={{ fontSize: "medium" }} className="text-muted ml-1">
                (She/her)
              </small>
            </h4>
            <p className="my-0 occupation">{userProfile.title}</p>
            <p className="my-0 location text-muted">
              {userProfile.bio}
            </p>
            <span className="contact-info ">
              <small className="text-muted">{userProfile.area}</small>
              Contact info
            </span>
            <p className="my-2 connections">500+ connections</p>
            <div className="d-flex justify-content-start w-100">
              <Button className="profile__button open-to-btn">Open to</Button>
              <Button
                variant="outline-primary"
                className="add__btn profile__button  mx-2"
              >
                Add Profile section
              </Button>
              <Button variant="outline-secondary" className="profile__button">
                More
              </Button>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <ul>
              <li className="education mb-1">
                <img
                  src="https://strive.school/favicon.ico"
                  alt=""
                  style={{ width: "3em", height: "3em" }}
                  className="mr-2"
                />
                Strive School
              </li>

              <li className="education">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Vtul-291x300.png"
                  alt=""
                  style={{ width: "3em", height: "3em" }}
                  className="mr-2"
                />
                visvesvaraya Technological University
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
>>>>>>> Stashed changes
