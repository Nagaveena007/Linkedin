import { Card, Row, Col } from "react-bootstrap";

const LeftSidebar = () => {
  return (
    <>
      <Card
        id="right-sidebar"
        className="pt-2 px-0"
        style={{ borderRadius: "7px" }}
      >
        <Card.Title className="my-auto px-3">Recent </Card.Title>

        <Card.Body id="follow" className="px-3">
          <Row>
            <Col className="d-flex flex-row align-items-center">
              <i className="bi bi-archive-fill"></i>
              <p className="mb-0 pl-2">Free course of web marketing...</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-column my-2">
              <a href=""> Groups </a>
              <span className="d-flex flex-row">
                <a href="" className="my-2 mr-auto">
                  Events
                </a>
                <i className="bi bi-plus-lg align-self-center"></i>
              </span>
              <a href=""> Followed Hashtags </a>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="pt-2 pb-0 text-center">
          <p>Discover more</p>
        </Card.Footer>
      </Card>
    </>
  );
};

export default LeftSidebar;
