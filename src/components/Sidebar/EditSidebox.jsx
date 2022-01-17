import { Card } from "react-bootstrap";

const EditSidebox = () => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex flex-column p-3">
        <span className="d-flex flex-row">
          <Card.Link href="#" className="text-gray">
            Edit public profile & URL{" "}
          </Card.Link>
          <i id="i" className="bi bi-question-circle-fill ml-auto">
            {" "}
            <span className="hide-show">
              <Card body className="p-0">
                {" "}
                See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing).
              </Card>
            </span>
          </i>
        </span>

        <hr />

        <span className="d-flex flex-row">
          <Card.Link href="#" className="mx-0 text-gray">
            Add profile in another language
          </Card.Link>
          <i id="i" className="bi bi-question-circle-fill ml-auto">
            {" "}
            <span className="hide-show">
              <Card body className="p-0">
                {" "}
                Creating a profile in another language makes it easier for local
                business contacts and recruiters to find you on LinkedIn.
              </Card>
            </span>
          </i>
        </span>
      </Card.Body>
    </Card>
  );
};

export default EditSidebox;
