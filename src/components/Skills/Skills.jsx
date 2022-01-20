import { Card, Button } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <Card id="skills">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Skills & endorsements</Card.Title>
            <span className="d-flex flex-row ml-auto">
              <Button className="px-3 py-1 mr-2 m-0">take skill quiz</Button>
              <p className="title p-2 m-0">Add a new skill</p>
              <i class="bi bi-pencil ml-3 p-2"></i>
            </span>
          </div>

          <Card.Text className="mt-3 mb-0">
            <p>CSS</p>
            <p>HTML</p>
            <p className="mb-0">JS</p>
          </Card.Text>

          <Card.Footer className="text-center">
            <p className="mb-0">See all skills</p>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Skills;
