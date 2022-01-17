import { Card, Container, Row } from "react-bootstrap";
import "./Education.css";
const Education = () => {
  return (
    <Card
      className="px-2 mt-4 mb-2"
      style={{
        borderRadius: "9px",
      }}
    >
      <h5 className="title__activity mb-4">Education</h5>
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>
          <div className="col-md-4">
            <h6>Strive School </h6>
            <p>
              <small>Front end development </small>
              <br />
              <small className="text-muted">
                Sep 2021 - Present · 5 mos
                <br />
                Batch: Sep 21
              </small>
              <br />
              React,Redux,JS, HTML,CSS
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Vtul-291x300.png"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4">
            {/* Bachelor's degree, Electronics and Communication
            EngineeringBachelor's degree, Electronics and Communication
            Engineering 2012 - 2016 */}
            <h6>Visvesvaraya Technological University</h6>
            <p>
              <small>
                {" "}
                Bachelor's degree, Electronics and Communication Engineering{" "}
              </small>
              <br />
              <small className="text-muted">
                2012 - 2016
                <br />
                Hubli, Karnataka, India
              </small>
            </p>
          </div>
        </div>
      </div>
      <Card.Footer
        className="d-flex justify-content-center text-muted"
        style={{ backgroundColor: "transparent" }}
      >
        <Card.Text>See all education</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Education;
