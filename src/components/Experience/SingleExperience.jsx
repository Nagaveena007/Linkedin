import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import "./Experience.css";
import { useParams } from "react-router";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SingleExperience = ({
  company,
  id,
  role,
  area,
  startDate,
  endDate,
  description,
}) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const [singleCompany, setSingleCompany] = useState("");
  const [singleRole, setSingleRole] = useState("");
  const [singleDescription, setSingleDescription] = useState("");
  const [singleArea, setSingleArea] = useState("");
  const [singleStartDate, setSingleStartDate] = useState("");
  const [singleEndDate, setSingleEndDate] = useState("");

  const [experiences, setExperiences] = useState(null);
  const [editExperience, setEditExperience] = useState(false);
  const closeEditExperience = () => setEditExperience(false);
  const params = useParams();
  useEffect(() => {
    setSingleCompany(company);
    setSingleRole(role);
    setSingleDescription(description);
    setSingleArea(area);
    setSingleStartDate(startDate);
    setSingleEndDate(endDate);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const experience = {
      role: singleRole,
      company: singleCompany,
      startDate: singleStartDate,
      endDate: singleEndDate || null,
      description: singleDescription,
      area: singleArea,
    };

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e68379c2c1880015ab949c/experiences/${selectedExperience}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc
            `,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
        closeEditExperience();
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const showEditExperience = async () => {
    setEditExperience(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e68379c2c1880015ab949c/experiences/${selectedExperience}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc
            `,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSingleCompany(data.company);
        setSingleRole(data.role);
        setSingleDescription(data.description);
        setSingleArea(data.area);
        setSingleStartDate(data.startDate);
        setSingleEndDate(data.endDate);
      } else {
        console.log("Fetch Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e68379c2c1880015ab949c/experiences/${selectedExperience}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc
            `,
          },
        }
      );
      if (response.ok) {
        closeEditExperience();
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div style={{ marginLeft: "12px", marginTop: "12px" }}>
        <div className="col-md-1 mr-sm-2">
          <PencilFill
            style={{ marginLeft: "42em", marginBottom: "0em" }}
            size={20}
            id="pencil-icon-open-edit-form"
            onClick={() => {
              showEditExperience();
              setSelectedExperience(id);
            }}
          />
        </div>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://strive.school/favicon.ico"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>

          <div className="col-md-4">
            <h6>{role} </h6>
            <p>
              <small> {company} </small>
              <br />
              <small className="text-muted ">
                {startDate} - {endDate}
                <br />
                {area}
              </small>
            </p>
            <p className="  ">
              <strong>
                <small>{description}</small>{" "}
                <small className="text-muted"> ...see more</small>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <Modal show={editExperience} onHide={closeEditExperience}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                value={singleCompany}
                onChange={(e) => setSingleCompany(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={singleRole}
                onChange={(e) => setSingleRole(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={singleDescription}
                onChange={(e) => setSingleDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={singleArea}
                onChange={(e) => setSingleArea(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={singleStartDate}
                onChange={(e) => setSingleStartDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={singleEndDate}
                onChange={(e) => setSingleEndDate(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                type="button"
                className="mr-4"
                onClick={deleteExperience}
              >
                Delete
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleExperience;
