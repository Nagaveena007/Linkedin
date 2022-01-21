import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { parseISO } from "date-fns";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import "./Experience.css";
import { useParams } from "react-router";
const SingleExperience = ({ experience, userProfile, setUserProfile }) => {
  const [userExperience, setUserExperience] = useState({
    area: "",
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const params = useParams();
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
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userProfile._id}/experiences/${params._id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc`,
          },
          method: "PUT",
          body: JSON.stringify(userExperience),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      } else {
        const updatedExperience = await response.json();
        return updatedExperience;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const deleteExperience = async () => {
    try {
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
      if (!response.ok) {
        throw new Error("Failed to fetch");
      } else {
        const deletedExperience = await response.json();
        return deletedExperience;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

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
          <div className="col-md-1 d-flex-end">
            <PlusLg size={26} id="plus-icon-open-edit-form" />
          </div>
          <div className="col-md-1 mr-sm-2">
            <PencilFill size={20} id="pencil-icon-open-edit-form" />
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
        </div>
      </div>
    </>
  );
};

export default SingleExperience;
