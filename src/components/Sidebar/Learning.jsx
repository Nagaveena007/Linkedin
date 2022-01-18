import { Card, Image, Button } from "react-bootstrap";

const Learning = () => {
  return (
    <Card id="learning" className="pt-2 pb-0 mb-4">
      <Card.Title className="d-flex flex-row py-auto px-2">
        <Image
          src="../images/promoted/logoLinkedin.png"
          alt="linkedin logo"
          className="logo mr-2"
        />
        <span className="d-flex align-self-center">learning</span>
      </Card.Title>
      <div className="px-2">
        <p>Add new skills with these courses, free for 24 hours</p>
      </div>
      <div className="d-flex flex-row align-items-center pb-2 px-2 border-bottom">
        <Card.Img src="../images/video/video1.png" alt="video 1 preview" />
        <Card.Body className="p-0 ml-2">
          <Card.Link href="#">
            Substance Designer 2020 Essential Training
          </Card.Link>
        </Card.Body>
      </div>
      <div className="d-flex flex-row align-items-center my-2 pb-2 px-2 border-bottom">
        <Card.Img src="../images/video/video2.png" alt="video 2 preview" />
        <Card.Body className="p-0 ml-2">
          <Card.Link href="#">Rhino 6: Tips, Triks, and Techniques</Card.Link>
        </Card.Body>
      </div>
      <div className="d-flex flex-row align-items-center pb-2 px-2">
        <Card.Img src="../images/video/video3.png" alt="video 3 preview" />
        <Card.Body className="p-0 ml-2">
          <Card.Link href="#">Using Python with Excel</Card.Link>
        </Card.Body>
      </div>
      <Button className="btn-connect card-bottom d-flex justify-content-center align-items-center p-2">
        See my recommendations{" "}
      </Button>
    </Card>
  );
};

export default Learning;
