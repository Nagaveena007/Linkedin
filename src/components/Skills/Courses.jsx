import { Card, Button } from "react-bootstrap";
import "./Skills.css";

const Courses = () => {
  return (
    <>
      <Card id="courses" className="mb-2">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Courses</Card.Title>
            <span className="d-flex flex-row ml-auto">
              <i class="bi bi-plus-lg p-2"></i>
              <i class="bi bi-pencil ml-3 p-2"></i>
            </span>
          </div>

          <Card.Text className="mt-3 mb-0">
            <p>English School</p>
            <p>Coding Bootcamp</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Courses;
