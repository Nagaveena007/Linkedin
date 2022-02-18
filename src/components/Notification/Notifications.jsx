import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SecondNotification from "./SecondNotification";
import "./Notification.css";
import PromotedSideBox from "../Sidebar/PromotedSideBox";

const Notifications = ({ userProfile, setUserProfile }) => {
  const [notification, setNotification] = useState([]);
  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmNzk1OGRhZDc4ZTAwMTUxNTI1MmEiLCJpYXQiOjE2NDUxODEyNzIsImV4cCI6MTY0NjM5MDg3Mn0.wBgPAa6-uLUeIBWwg3QiSXQPB4SXtPBALJfhKHKGlAI
            `,
          },
        }
      );
      if (res.ok) {
        let userProfile = await res.json();
        setNotification(userProfile);
        console.log(notification);
      } else {
        console.log("Something goes wrong while fetching the data");
      }
    } catch (err) {
      console.log("error connecting to the server");
    }
  };

  useEffect(() => {
    fetchingData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={"3"} className="mt-2">
            <Card className="mt-3" style={{ borderRadius: "0.6rem" }}>
              <Card.Body className=" side__notification">
                <Card.Text className="">Manage your</Card.Text>
                <Card.Text className="">Notifications</Card.Text>
                <Link to="/" className="">
                  View settings
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={"6"} className="mt-4">
            <SecondNotification profiles={notification} />
          </Col>

          <Col xs={"3"} className="mt-4 pt-1">
            <PromotedSideBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Notifications;
