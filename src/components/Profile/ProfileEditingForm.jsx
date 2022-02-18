import "../Profile/ProfileEditingModal.css";
import { PencilFill, InfoSquareFill, PlusLg } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProfileEditForm = ({ profileDetails }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // const [newHeadline, setNewHeadline] = useState(headline || '');
  // const handleHeadline = (inputHeadline) => {
  //     setNewHeadline(inputHeadline);
  // };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  const [profileToEdit, setProfileToEdit] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  });

  const [showEducation, setShowEducation] = useState(true);

  const handleEducation = (checkboxValue) => {
    setShowEducation(checkboxValue);
  };

  const handleInput = (fieldKey, inputValue) => {
    setProfileToEdit({
      ...profileToEdit,
      [fieldKey]: inputValue,
    });
  };

  const [formData, setFormData] = useState({});
  console.log(formData);

  const getProfile = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmNzk1OGRhZDc4ZTAwMTUxNTI1MmEiLCJpYXQiOjE2NDUxODEyNzIsImV4cCI6MTY0NjM5MDg3Mn0.wBgPAa6-uLUeIBWwg3QiSXQPB4SXtPBALJfhKHKGlAI`,
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      } else {
        const profile = await response.json();
        return profile;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const putProfile = async (profileID, data) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmNzk1OGRhZDc4ZTAwMTUxNTI1MmEiLCJpYXQiOjE2NDUxODEyNzIsImV4cCI6MTY0NjM5MDg3Mn0.wBgPAa6-uLUeIBWwg3QiSXQPB4SXtPBALJfhKHKGlAI`,
          },
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      } else {
        const updatedProfile = await response.json();
        return updatedProfile;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const postProfileImage = async (profileID, formData) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileID}/picture`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmNzk1OGRhZDc4ZTAwMTUxNTI1MmEiLCJpYXQiOjE2NDUxODEyNzIsImV4cCI6MTY0NjM5MDg3Mn0.wBgPAa6-uLUeIBWwg3QiSXQPB4SXtPBALJfhKHKGlAI`,
          },
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      } else {
        const profileImage = await response.json();
        return profileImage;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const uploadProfileImage = async () => {
    try {
      const imgData = new FormData();
      imgData.append("profile", formData);
      console.log(imgData);
      const resp = await postProfileImage(params.id, imgData);
      console.log(resp);
      return resp;
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const resp = await putProfile(params.id, profileToEdit);
      if (!resp.ok) {
        throw new Error("failed to fetch");
      }
      return resp;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getProfile(params.id);
      setProfileToEdit({
        name: data.name || "",
        surname: data.surname || "",
        email: data.email || "",
        bio: data.bio || "",
        title: data.title || "",
        area: data.area || "",
      });
      console.log(data);
    };
    fetch();
  }, []);

  return (
    <>
      <PencilFill
        size={20}
        id="pencil-icon-open-edit-form"
        onClick={handleShow}
      />
      <Modal id="profile-edit-form-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="edit-profile-form-required-notice">*Indicates required</p>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                type="text"
                required
                value={profileToEdit.name}
                onChange={(e) => handleInput("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                type="text"
                required
                value={profileToEdit.surname}
                onChange={(e) => handleInput("surname", e.target.value)}
              />
            </Form.Group>
            <p className="profile-form-small-notice">Name pronunciation</p>
            <InfoSquareFill />{" "}
            <span>This can only be added using our mobile app</span>
            <Form.Group controlId="profile-edit-form-pronouns">
              <Form.Label>Pronouns</Form.Label>
              <Form.Control as="select" placeholder="Please select">
                <option>She/Her</option>
                <option>He/Him</option>
                <option>They/Them</option>
                <option>Custom</option>
              </Form.Control>
              <p className="profile-form-small-notice">
                Let others know how to refer to you.
              </p>
              <p>
                <Link to="/">Learn more</Link>
              </p>
            </Form.Group>
            <div id="showEducation" className="mb-3">
              <input
                type="checkbox"
                id="showEducationCheckbox"
                name="showEducationCheckbox"
                onChange={(e) => handleEducation(e.target.checked)}
                checked={showEducation}
              />
              <label for="showEducationCheckbox" className="ml-2 mt-3">
                Show education in my intro
              </label>
            </div>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: London, United Kingdom"
                required
                value={profileToEdit.area}
                onChange={(e) => handleInput("area", e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="enter your postcode"
                value={profileToEdit.bio}
                onChange={(e) => handleInput("bio", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact info</Form.Label>
              <p>Edit your email address</p>
              <Form.Control
                type="text"
                value={profileToEdit.email || ""}
                onChange={(e) => handleInput("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <div className="form-label">
                <p>Profile Picture</p>
                <p>Add a new profile picture</p>
              </div>
              <Form.Label
                id="choose-file-label"
                className="mt-3 btn btn-outline-primary"
                for="choose-file-btn"
              >
                <PlusLg id="plus-icon-add-media" size={18} /> Select new profile
                image
              </Form.Label>
              <Form.Control
                id="choose-file-btn"
                type="file"
                onChange={(event) => {
                  setFormData(event.target.files[0]);
                }}
              />
            </Form.Group>
            <Button
              className="save-profile-btn btn-sm"
              onClick={uploadProfileImage}
            >
              Upload image
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className={"d-flex justify-content-end"}>
          <Button
            id="save-profile-btn"
            className="px-3 py-1"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileEditForm;
