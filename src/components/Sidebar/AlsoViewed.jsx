import { Card, Button } from "react-bootstrap";
const AlsoViewed = () => {
  return (
    <Card id="also-viewed" className="mb-4">
      <Card.Title className="my-3 px-2 pt-2">People also viewed</Card.Title>
      <div className="d-flex flex-row align-items-center px-2">
        <Card.Img src="../images/promoted/grammarly.png" alt="grammarly logo" />
        <Card.Body className="p-0 ml-2">
          <Card.Link href="#">
            Chiara Tommasino · 2nd
            <Card.Text className="d-flex flex-row align-items-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus sed quae maxim
            </Card.Text>
          </Card.Link>
          <Button className="btn-connect my-2">Connect</Button>
        </Card.Body>
      </div>
      <Button className="btn-connect card-bottom d-flex justify-content-center align-items-center">
        Show more <i class="bi bi-chevron-compact-down ml-1"></i>
      </Button>
    </Card>
  );
};

export default AlsoViewed;
