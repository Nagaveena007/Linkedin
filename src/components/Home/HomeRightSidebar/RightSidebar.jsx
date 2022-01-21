import { Card, Button, Image, Row, Col } from "react-bootstrap";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <>
      <Card id="right-sidebar" className="py-2" style={{ borderRadius: "7px" }}>
        <span className="d-flex flex-row">
          <Card.Title className="my-auto px-2">Add your feed </Card.Title>
          <i
            className="bi bi-info-square-fill ml-auto my-auto pr-2"
            style={{ color: "gray" }}
          ></i>
        </span>
        <Card.Body id="follow" className="px-1">
          <div className="d-flex flex-row">
            <Image
              src="./images/huawei.jpg"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Huawei</h6>
              <p>Company · Telecomunications</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row my-3">
            <Image
              src="./images/woman.png"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Natalia Gutiérrez Botero</h6>
              <p>Gerente de RRHH,Director de RRHH ...</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row">
            <Image
              src="./images/samsung.png"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Samsung Electronics</h6>
              <p>Company · Consumer Electronics</p>
              <Button
                type="button"
                class="btn-connect btn btn-primary px-2 py-1"
              >
                <i class="bi bi-plus"></i> Follow
              </Button>
            </span>
          </div>
        </Card.Body>
        <Card.Footer className="pt-2 pb-0">
          <p>
            {" "}
            View all recommendations <i class="bi bi-arrow-right ml-2"></i>
          </p>
        </Card.Footer>
      </Card>
      <Card id="right-sidebar" className="mt-2">
        <Card.Img
          variant="top"
          src="./images/linkedin.jpg"
          alt="linkedin adv"
        />
      </Card>
      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href=""> about </a>
            <a href="" className="mx-2">
              {" "}
              accessibility{" "}
            </a>{" "}
            <a href=""> help center </a>
          </Col>
          <Col xs={12}>
            <a href="">
              {" "}
              privacy & terms <i class="bi bi-chevron-down"></i>{" "}
            </a>
            <a href="" className="mx-2">
              {" "}
              ad choises
            </a>{" "}
          </Col>
          <Col xs={12}>
            <a href=""> advertising </a>
            <a href="" className="mx-2">
              {" "}
              business services <i class="bi bi-chevron-down"></i>{" "}
            </a>{" "}
          </Col>
          <Col xs={12}>
            <a href=""> get the linkedin app </a>
            <a href="" className="mx-2">
              {" "}
              more{" "}
            </a>{" "}
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <Image
              id="linkedin-logo"
              src="../images/promoted/linkedinADS.png"
              alt="linkedin logo"
              className="mr-2"
            />
            <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RightSidebar;
