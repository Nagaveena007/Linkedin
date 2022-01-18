import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { parseISO } from "date-fns";

const SingleExperience = ({ experience }) => {
  const [userExperience, setUserExperience] = useState({
    area: "",
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });

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

  return (
    <>
      <div style={{ marginLeft: "12px" }}>
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
            {/* <h6>Frontend Developer </h6> */}
            <h6>{userExperience.role} </h6>
            <p>
              {/*  <small> Strive School · Student </small> */}
              <small> {userExperience.company} · Student </small>
              <br />
              <small className="text-muted">
                {userExperience.startDate} - {userExperience.endDate}
                {/*  Sep 2021 - Present · 5 mos */}
                <br />
                {userExperience.area}
                {/*  Berlin, Germany */}
              </small>
            </p>
          </div>
          <p className="ml-5 pl-5 mr-5">
            {/*  • Writing well-designed, testable, efficient code by using best
            software development practices.
            <br />• Creating website layout/user interfaces by using standard
            React-JS,Redux,JS, HTML/CSS, practices. */}
            <br /> {userExperience.description}
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
