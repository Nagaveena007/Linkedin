import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import { Modal, Button, Form } from "react-bootstrap";

const NewPost = () => {
  return (
    <Modal.Dialog id="new-post">
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="textarea">
            <Form.Control as="textarea" placeholder="What do you want to talk about?" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Post</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default NewPost;
