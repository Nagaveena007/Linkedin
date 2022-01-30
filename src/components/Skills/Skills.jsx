import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import "./Skills.css";

const Skills = () => {
  const [contentToShow, setContentToShow] = useState(false);
  const toggleShowMore = () => {
    setContentToShow(!contentToShow);
  };

  const ArrowDown = () => <i className="bi bi-chevron-compact-down ml-1"></i>;
  const ArrowUp = () => <i class="bi bi-chevron-compact-up ml-1"></i>;
  const skillsList = [
    { name: "JS" },
    {
      name: "React JS",
    },
    {
      name: "Redux",
    },
    {
      name: "Redux-Thunk",
    },
    {
      name: "Type Script",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Socket-io",
    },
  ];
  return (
    <>
      <Card id="skills" className="mb-2">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Skills & endorsements</Card.Title>
            <span className="d-flex flex-row ml-auto">
              <Button className="px-3 py-1 mr-2 m-0">take skill quiz</Button>
              <PlusLg size={26} className="mt-1 mr-4" />
              <PencilFill size={20} style={{ marginTop: ".5em" }} />
            </span>
          </div>

          <Card.Text className="mt-3 mb-0">
            {skillsList.slice(0, 3).map((user, i) => (
              <p key={i}>{user.name}</p>
            ))}
            {contentToShow && (
              <Card.Text className="mt-3 mb-0">
                {skillsList.slice(3, 8).map((user, i) => (
                  <p key={i}>{user.name}</p>
                ))}
              </Card.Text>
            )}
          </Card.Text>

          <Card.Footer className="text-center d-flex justify-content-center">
            <Button
              className="btn-connect card-bottom  align-items-center"
              onClick={() => toggleShowMore()}
            >
              {contentToShow ? `Show less` : "See all skills"}{" "}
              {contentToShow ? ArrowUp() : ArrowDown()}
            </Button>
            {/*  <p className="mb-0">See all skills</p> */}
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Skills;
