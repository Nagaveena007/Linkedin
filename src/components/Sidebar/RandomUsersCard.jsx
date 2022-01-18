import { Card, Button } from "react-bootstrap";

const RandomUsersCard = (props) => {
  return (
    <div className="d-flex flex-row align-items-center px-2">
      <Card.Img src={props.src} alt={props.name} />
      <Card.Body className="p-0 ml-2">
        <Card.Link href="#">
          {props.name} {props.surname} · <span className="disabled">2nd</span>
          <Card.Text className="d-flex flex-row align-items-center">
            {props.text}
          </Card.Text>
        </Card.Link>
        <Button className="btn-connect my-2">Connect</Button>
      </Card.Body>
    </div>
  );
};

export default RandomUsersCard;
