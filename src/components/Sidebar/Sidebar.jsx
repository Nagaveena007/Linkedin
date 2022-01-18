import { useState, useEffect } from 'react' 
import { Col } from "react-bootstrap";
import "./Sidebar.css";
import "./alsoViewed.css";

import EditSidebox from "./EditSidebox";
import PromotedSideBox from "./PromotedSideBox";
import AlsoViewed from "./AlsoViewed";
import PeopleMayKnow from "./PeopleMayKnow";

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { REACT_APP_TOKEN } = process.env;
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.ok) {
        let responseJson = await response.json();
        console.log(responseJson);
        setUsers(responseJson);
        return users;
      } else {
        console.log("error on fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col md={2} className="offset-8 bg px-0">
      <EditSidebox />
      <PromotedSideBox />
      <AlsoViewed users={users} setUsers={setUsers} />
      <PeopleMayKnow users={users} setUsers={setUsers} />
    </Col>
  );
};

export default Sidebar;
