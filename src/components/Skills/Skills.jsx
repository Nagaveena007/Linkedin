import { Card, Button } from "react-bootstrap";
import "./Skills.css"

const Skills = () => {
  return (
    <>
      <Card id="skills">
        <Card.Body>
          <div className="d-flex flex-row">
            <Card.Title>Skills & endorsements</Card.Title>
            <span className="d-flex flex-row ml-auto">
              <p className="title p-2 m-0">Add a new skill</p>
              <i class="bi bi-pencil ml-3 p-2"></i>
            </span>
          </div>
            <Button className="px-3 py-1 mx-0 my-2">take skill quiz</Button>
          <Card.Text className="mt-3">
            <p>CSS</p>
            <p>HTML</p>
            <p>JS</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Skills;
