import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    text: " ",
  });

  const createNewPost = async (e) => {
    e.preventDefault();

    const newPostToSend = {
      ...newPost
    };

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(newPostToSend),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2YjIwOWMyYzE4ODAwMTVhYjk0YTEiLCJpYXQiOjE2NDI1MDg4MTAsImV4cCI6MTY0MzcxODQxMH0.JAfyKqdxjSdTol524cwYXpcd7LDhynRxo5EuWv9T7Ac`,
          },
        }
      );
      if (response.ok) {
        const newPostJson = await response.json();
        console.log(newPostJson);
        setNewPost(newPostJson);
        alert("Post was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal.Dialog id="new-post">
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createNewPost}>
          <Form.Group className="mb-3" controlId="textarea">
            <Form.Control
              as="textarea"
              value={newPost.text}
              onChange={(e) =>
                setNewPost({
                  text: e.currentTarget.value,
                })
              }
              placeholder="What do you want to talk about?"
              rows={3}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default NewPost;
