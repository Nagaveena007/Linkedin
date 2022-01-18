import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "./FooterPart.css";
const FooterPart = () => {
  return (
    <Container id="footer">
      <Row className="pl-3 pb-2 mt-5">
        <Image src="../images/promoted/linkedinADS.png" alt="linkedin logo" />
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Row>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> about </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">community guidelines</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">privacy & terms </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> sales solutions </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> safety center </a>
              </Col>
            </div>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> accessibility </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> careers</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> ad choices </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> mobile </a>
              </Col>
            </div>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> talent solutions </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> marketing solutions </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> advertising </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> small business </a>
              </Col>
            </div>
            <div id="footer-settings" className="mr-3">
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-question-circle-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> questions? </a>
                  <p> visit our help center. </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-gear-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> manage your account and privacy </a>
                  <p> go to your settings. </p>
                </div>
              </Col>
            </div>
            <div>
              <Col xs={12} md={6} lg={3}>
                <Form>
                  <Form.Group controlId="languages">
                    <Form.Label>Select language</Form.Label>
                    <Form.Control as="select">
                      <option>English</option>
                      <option>Italian</option>
                      <option>Russian</option>
                      <option>French</option>
                      <option>German</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPart;
