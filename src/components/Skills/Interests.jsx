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
              <Image src="https://scontent.fbri2-1.fna.fbcdn.net/v/t39.30808-1/cp0/e15/q65/p120x120/263476996_440355684317938_7725318443556779768_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=dwH-97PeiAYAX8SE6O4&_nc_ht=scontent.fbri2-1.fna&oh=00_AT8OxvD7p1viGwTOlhtPq_IY3U3oDYDdVEipB0O6iUiSjA&oe=61F0266E" alt="startup logo" />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">STARTUPS WITHOUT BORDERS</h6>
                <p>6,023 followers</p>
              </span>
            </div>
            <div className="d-flex flex-row ml-5">
              <Image src="https://strive.school/favicon.ico" alt="startup logo" />
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
