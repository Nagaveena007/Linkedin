import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

const SinglePost = ({
  post,
  handleEdit,
  image,
  name,
  surname,
  title,
  text,
  id,
}) => {
  const { pathname } = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profile-sub-section p-2 my-2">
      <Card
        style={{ width: "580.75px", borderRadius: "7px", marginLeft: "11.6em" }}
        className="mb-2 "
      >
        <Card.Body>
          <div className="d-flex flex-row">
            <Image
              style={{ width: "60px" }}
              src={pathname === "/" ? post.user.image : image}
              alt="profile picture of"
              {...post.user.name}
              {...post.user.surname}
            />

            <span className="d-flex flex-column ml-3">
              <Link
                to={
                  pathname === "/"
                    ? `/profile/${post.user._id}`
                    : `/profile/${id}`
                }
              >
                <Card.Title>
                  {pathname === "/" ? post.user.name : name}
                  {pathname === "/" ? post.user.surname : surname} &#8226;
                </Card.Title>
              </Link>
              <Link
                to={
                  pathname === "/"
                    ? `/profile/${post.user._id}`
                    : `/profile/${id}`
                }
              >
                <Card.Subtitle className="mb-2 text-muted">
                  {pathname === "/" ? post.user.title : title}
                </Card.Subtitle>
              </Link>
            </span>
            {pathname === "/" && (
              <i
                style={{ marginLeft: "16em" }}
                className="bi bi-three-dots"
                onClick={() => handleEdit(post._id)}
              ></i>
            )}
          </div>
          <Link
            to={
              pathname === "/" ? `/profile/${post.user._id}` : `/profile/${id}`
            }
          ></Link>
          <Card.Text style={{ marginLeft: "4.3em", fontSize: "large" }}>
            {pathname === "/" ? post.text : text}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={post.image} className="w-100" alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SinglePost;
