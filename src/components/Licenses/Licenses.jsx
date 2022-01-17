import { Card, Container, Row } from "react-bootstrap";
import "./Licenses.css";
const Licenses = () => {
  return (
    <Card
      className="px-2 mt-4 mb-2"
      style={{
        borderRadius: "9px",
      }}
    >
      <h5 className="title__activity mb-4">Licenses & certifications</h5>
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQF_vyOiUOVXWw/company-logo_200_200/0/1519892871431?e=1650499200&v=beta&t=hrBZw2gl9x1pfyCrPwG5InO2riZWyDGyOn9qGZUU3EI"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>
          <div className="col-md-4">
            <h6>Oracle Certified Professional, Java SE 6 Programmer </h6>
            <p>
              <small>JSpiders - Training & Development Center </small>
              <br />
              <small className="text-muted">
                Issued Jun 2017 · No Expiration Date
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4">
            <h6>Module-1</h6>
            <p>
              <small> Strive School</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4">
            <h6>Module-2</h6>
            <p>
              <small> Strive School</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4">
            <h6>Module-3</h6>
            <p>
              <small> Strive School</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4">
            <h6>Module-4</h6>
            <p>
              <small> Strive School</small>
            </p>
          </div>
        </div>
      </div>
      <Card.Footer
        className="d-flex justify-content-center text-muted"
        style={{ backgroundColor: "transparent" }}
      >
        <Card.Text>See all Licenses & certifications</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Licenses;
