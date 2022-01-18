import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SingleExperience from "./SingleExperience";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  const params = useParams();

  const getExperiences = async (profileID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc
            `,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const experiences = await response.json();
        return experiences;
      } else {
        console.log("fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getExperiencesById = async () => {
    try {
      const resp = await getExperiences(params.id);
      setExperiences(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line
  useEffect(() => getExperiencesById(), []);

  return (
    <>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <h5 className="title__activity mb-4">Experience</h5>
        {experiences.map((exp) => (
          <SingleExperience key={exp._id} experience={exp} />
        ))}
      </Card>
    </>
  );
};

export default Experiences;
