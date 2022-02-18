import { Card, Container, Row } from "react-bootstrap";
import image from "../../assests/featured-post.png";

import "./Activity.css";
const Activity = () => {
  return (
    <>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <h5 className="title__activity">Activity</h5>
        <div style={{ marginLeft: "12px" }}>
          <p className="text-muted">1,224 followers</p>
          <p className="text-muted">
            <small> Nagaveena Hallikeri posted this • 5h </small>
          </p>
          <p>
            In the last 15 days I have spoken to about 50 international 🌏
            candidates for various positions that we are hiring for our clients.
            Among 50 candidates that I spoke with, few of them asked me why they
            should consider coming to Germany instea
          </p>
        </div>
        <div
          className="row card mb-3 justify-content-center"
          style={{ overflow: "hidden", margin: "10px" }}
        >
          <div
            className="row g-0  align-items-center"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <div className="col-md-2 ">
              <img
                src={image}
                className="img-fluid rounded-start ml-3"
                alt="..."
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <small className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </small>
                <p className="card-text">
                  <small className="text-muted">dg-ramm.de • 7 min read</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ marginLeft: "12px" }}>
          <p className="text-muted">
            <small> Nagaveena Hallikeri reshared a post • 3d </small>
          </p>
          <p>
            Informieren Sie sich über die aktuellsten Jobs, die wir bei
            Destination Germany - Ramm einstellen 🔥
          </p>
        </div>
        <div
          className="row card mb-3 justify-content-center"
          style={{ overflow: "hidden", margin: "10px" }}
        >
          <div
            className="row g-0  align-items-center"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <div className="col-md-2 ">
              <img
                src={image}
                className="img-fluid rounded-start ml-3"
                alt="..."
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <small className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </small>
                <p className="card-text">
                  <small className="text-muted">dg-ramm.de • 7 min read</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Card.Footer
          fluid
          className="d-flex justify-content-center"
          style={{ backgroundColor: "transparent" }}
        >
          <span className="text-muted">See all activity</span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Activity;
