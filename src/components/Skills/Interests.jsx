import { Card, Image } from "react-bootstrap";
import "./Skills.css";

const Interests = () => {
  return (
    <>
      <Card id="interests" className="mb-2">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Interest</Card.Title>
          </div>

          <Card.Text className="d-flex flex-row mt-3 mb-0">
            <p className="mr-3">Companies</p>
            <p>School</p>
          </Card.Text>
          <div className="d-flex flex-row  mt-2 border-bottom">
            <div className="d-flex flex-row mr-5">
              <Image src="images/interest/startup.png" alt="startup logo" />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">STARTUPS WITHOUT BORDERS</h6>
                <p>6,023 followers</p>
              </span>
            </div>
            <div className="d-flex flex-row ml-5">
              <Image src="images/interest/strive.png" alt="startup logo" />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">STRIVE SCHOOL</h6>
                <p>2,242 followers</p>
              </span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <p className="mb-0">See all companies</p>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Interests;
