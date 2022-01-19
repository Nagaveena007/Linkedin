import { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import { PencilFill, PlusLg } from 'react-bootstrap-icons'
import './Experience.css'
import { useParams } from "react-router";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'


const SingleExperience = ({ experience, userProfile, setUserProfile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stillWorkingAtRole, setStillWorkingAtRole] = useState(true)

  const [textAreaValueLength, setTextAreaValueLength] = useState(0);
  const [userExperience, setUserExperience] = useState({
    area: "",
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const params = useParams()

  const method = (userProfile._id && params._id) ? 'PUT' : 'POST'

  useEffect(
    () =>
      setUserExperience({
        area: experience.area,
        company: experience.company,
        description: experience.description,
        role: experience.role,
        endDate: experience.endDate,
        startDate: experience.startDate,
      }),
    [experience]
  );
  const putExperiences = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userProfile._id}/experiences/${params._id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc`,
        },
        method: method,
        body: JSON.stringify(),
      }
    );
    console.log(response);
  };

  const deleteExperience = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userProfile._id}/experiences/${params._id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc`,
        },
        method: "DELETE",
      }
    );
    console.log(response);
  };

  const handleEndDate = (checkboxValue) => {
    setStillWorkingAtRole(checkboxValue);
  };

  const handleInput = (fieldKey, inputValue) => {
    setUserExperience({
      ...userExperience,
      [fieldKey]: inputValue,
    });
  };


  const handleTextAreaValueLength = (inputTextAreaValue) => {
    setTextAreaValueLength(inputTextAreaValue);
  };

  /* const handleSubmit = async () => {
    try {
      const resp =
        method === "PUT"
          ? await updateExperience(params._id)
          : await postExperience(params._id);
      if (!resp.ok) {
        throw new Error("failed to fetch");
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  } */

const postExperience = async()=>{
  return(
    <>
      <h4>Hello POST</h4>
    </>
  )
};
  const handleDelete = async () => {
    try {
      const resp = await deleteExperience(params.id);
      if (!resp.ok) {
        throw new Error("failed to delete!");
      }
      return resp;
    } catch (error) {
      console.log(error);

    }
  };


  /* const updateExperience = (parameter) => {


    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Software Developer"
                  required
                  value={userExperience.role}
                  onChange={(e) => handleInput('role', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Google"
                  required
                  value={userExperience.company}
                  onChange={(e) => handleInput('company', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="area">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Sydney, Australia"
                  required
                  value={userExperience.area}
                  onChange={(e) => handleInput('area', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Managing skills"
                  required
                  value={userExperience.description}
                  onChange={(e) => handleInput('description', e.target.value)}
                />
              </Form.Group>
              <div id="stillWorkingAtRole" className="mb-3">
                <input
                  type="checkbox"
                  id="stillWorkingAtRoleCheckbox"
                  name="stillWorkingAtRoleCheckbox"
                  onChange={(e) => handleEndDate(e.target.checked)}
                  checked={stillWorkingAtRole}
                />
                <label for="stillWorkingAtRoleCheckbox" className="ml-2 mt-3">
                  I am currently working at this role
                </label>
              </div>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="startDate">
                    <Form.Label>Start date*</Form.Label>
                    <Form.Control
                      type="date"
                      required
                      value={userExperience.startDate}
                      onChange={(e) => handleInput("startDate", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  {!stillWorkingAtRole && (
                    <Form.Group controlId="endDate">
                      <Form.Label>End date*</Form.Label>
                      <Form.Control
                        type="date"
                        required
                        value={userExperience.endDate || ""}
                        onChange={(e) => handleInput("endDate", e.target.value)}
                      />
                    </Form.Group>
                  )}
                </Col>
              </Row>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength="2000"
                  value={userExperience.description}
                  onChange={(e) => handleInput("description", e.target.value)}
                  onInput={(e) =>
                    handleTextAreaValueLength(e.target.value.length)
                  }
                />
                <div className="d-flex justify-content-end">
                  <p id="characterCount">{textAreaValueLength}/2,000</p>
                </div>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' id="delete-experience-btn" onClick={handleDelete}>
              Delete experience
            </Button>
            <Button
              id="save-experience-btn"
              className="px-3 py-1"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  } */



  return (
    <>
      <div style={{ marginLeft: "12px" }}>
        <div className="row">
          <div className="col-md-1">
            <img
              /* src={userExperience.image} */
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>

          <div className="col-md-4">
            <h6>{userExperience.role} </h6>
            <p>
              <small> {userExperience.company} · Student </small>
              <br />
              <small className="text-muted ">
                {userExperience.startDate} - {userExperience.endDate}
                <br />
                {userExperience.area}
              </small>
            </p>
          </div>
          <p className="ml-5 pl-4 mr-5 ">
            <strong>
              <small>{userExperience.description}</small>
            </strong>
            <span>
              <small className="text-muted"> ...see more</small>
            </span>
          </p>
          <PlusLg size={26} id="plus-icon-open-edit-form" />
          <PencilFill
            size={26}
            id="pencil-icon-open-edit-form"
           /*  onClick={updateExperience} */
          />

        </div>
      </div>
    </>
  );
};
export default SingleExperience;
