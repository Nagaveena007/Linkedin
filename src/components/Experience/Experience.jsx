import { Card, Container, Row } from "react-bootstrap";
import "./Experience.css";
const Experience = () => {
  return (
    <Card
      className="px-2 mt-4 mb-2"
      style={{
        borderRadius: "9px",
      }}
    >
      <h5 className="title__activity mb-4">Experience</h5>
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
            <h6>Frontend Developer </h6>
            <p>
              <small> Strive School · Student </small>
              <br />
              <small className="text-muted">
                Sep 2021 - Present · 5 mos
                <br />
                Berlin, Germany
              </small>
            </p>
          </div>
          <p className="ml-5 pl-5 mr-5">
            • Writing well-designed, testable, efficient code by using best
            software development practices.
            <br />• Creating website layout/user interfaces by using standard
            React-JS,Redux,JS, HTML/CSS, practices.
            <span>
              <small className="text-muted"> ...see more</small>
            </span>
          </p>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="experience-logo.png"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>
          <div className="col-md-4">
            <h6>Embedded Software Engineer</h6>
            <p>
              <small> PRADIV SOLUTIONS · Full-time </small>
              <br />
              <small className="text-muted">
                Sep 2017 - Jan 2021 · 3 yrs 5 mos
                <br />
                Bangalore Urban, Karnataka, India
              </small>
            </p>
          </div>
          <p className="ml-5 pl-5 ">
            • Building Firmware Product Stack from the ground up using Proteus-8
            professional and LT-Spice simulators as Digital circuit designing
            tool and MP-LAB simulator for Embedded C coding.
            <br />• Building Embedded product development using wired/wirele
            <span>
              <small className="text-muted"> ...see more</small>
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Experience;
