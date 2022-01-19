import { Card, Image } from "react-bootstrap";

const SingleFeed = (props) => {
  return (
    <Card style={{ width: "35rem" }} className="my-1">
      <Card.Body>
        <div className="d-flex flex-row">
          <Image
            src={props.image}
            alt="profile picture of"
            {...props.name}
            {...props.surname}
          />
          <span className="d-flex flex-column ml-3">
            <Card.Title>
              {props.name} {props.surname}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.title}
            </Card.Subtitle>
          </span>
        </div>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleFeed;
