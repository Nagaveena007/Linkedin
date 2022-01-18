import { Card } from "react-bootstrap";

const PromotedSideBox = () => {
  return (
    <>
      <Card id="promoted" className="p-2 mb-4" style={{ borderRadius: "7px" }}>
        <Card.Link className="d-flex flex-row">
          Promoted{" "}
          <i className="d-flex align-self-end bi bi-three-dots ml-auto"></i>
        </Card.Link>
        <div className="d-flex flex-row align-items-center">
          <Card.Img
            src="../images/promoted/grammarly.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Write with confidence</Card.Link>
            <Card.Text className="d-flex flex-row align-items-center">
              Grammarly helps you write effectively in Gmail and LinkedIn.
              Install now!
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="d-flex flex-row align-items-center my-2">
          <Card.Img
            src="../images/promoted/linkedinADS.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Reactivate now</Card.Link>

            <Card.Text className="d-flex flex-row align-items-center">
              Continue learning your Linkedin. Learning plan today. Cancel anytime.
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="d-flex flex-row align-items-center">
          <Card.Img
            src="../images/promoted/logoLinkedin.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Invitation from Linkedin</Card.Link>

            <Card.Text className="d-flex flex-row align-items-center">
              Place ads on Linkedin. Acquire new customers from your business. Try it now.
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default PromotedSideBox;
