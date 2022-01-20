import { Card, Button } from "react-bootstrap";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <Card id="right-sidebar" className="py-2" style={{ borderRadius: "7px" }}>
      <span className="d-flex flex-row">
        <Card.Title className="my-auto px-2">Add your feed </Card.Title>
        <i
          className="bi bi-info-square-fill ml-auto my-auto pr-2"
          style={{ color: "gray" }}
        ></i>
      </span>
      <Card.Body>
        <div className="d-flex flex-row">
          <i className="bi bi-circle-fill mr-3" style={{ fontSize: "2rem" }}></i>
          <span>
            <h6 className="mb-0">Huawei</h6>
            <p>Company · Telecomunications</p>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RightSidebar;
