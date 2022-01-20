import { Card } from "react-bootstrap";
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
          <div className="d-flex flex-row justify-content-around mt-2 border-bottom">
            <div className="d-flex flex-row">
              <i className="bi bi-image mr-2" style={{fontSize:"2rem"}}></i>
              <span>
                <p className="mb-0">LOREM IPSUM 1</p>
                <p>subtitle</p>
              </span>
            </div>
            <div className="d-flex flex-row">
              <i className="bi bi-image mr-2" style={{fontSize:"2rem"}}></i>
              <span>
                <p className="mb-0">LOREM IPSUM 2</p>
                <p>subtitle</p>
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
