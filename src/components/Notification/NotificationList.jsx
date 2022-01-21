import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import "./Notification.css";
const NotificationList = ({ _id, image, name, surname }) => {
  return (
    <Container>
      <Row>
        <Col xs={"6"} md={"12"}>
          <Link to={`/profile/${_id}`}>
            <ListGroup variant="flush" key={_id} className="list py-2">
              <img src={image} className="list_group ml-2" alt="asdfg" />
              <span className="span ml-4 mt-3">
                {name} {surname} followed you
              </span>
              <div>
                <BsThreeDots className="icon_dot" />
              </div>
              <p className="hour">4h</p>
            </ListGroup>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationList;
