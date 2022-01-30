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
              <Image
                src="https://media-exp1.licdn.com/dms/image/sync/C5627AQHfFErx6yiF0Q/articleshare-shrink_800/0/1643036426082?e=1643655600&v=beta&t=ezmlT9LFjosWj7FsIW6-9v1Zh197YltZb3HeuXKYVoY"
                alt="startup logo"
              />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">STARTUPS WITHOUT BORDERS</h6>
                <p>6,023 followers</p>
              </span>
            </div>
            <div className="d-flex flex-row ml-5">
              <Image
                src="https://strive.school/favicon.ico"
                alt="startup logo"
              />
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
