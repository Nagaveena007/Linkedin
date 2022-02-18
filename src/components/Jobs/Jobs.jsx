import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Search from "./Search";
import SingleJob from "./SingleJob";
const Jobs = () => {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, []);
  const fetchJobs = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10"
    );
    if (response.ok) {
      const res = await response.json();
      const job = res.data;
      console.log(job);
      setPosition(job);
    } else {
      console.log("Something went wrong while fetching the data");
    }
  };
  return (
    <Container>
      <Row>
        <Search />
      </Row>
      <Row md={4} xs={1}>
        {position &&
          position.map((job) => <SingleJob job={job} key={job._id} />)}
      </Row>
    </Container>
  );
};

export default Jobs;
