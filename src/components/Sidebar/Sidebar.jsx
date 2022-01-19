import { useState, useEffect } from 'react'
import "./Sidebar.css";
import "./alsoViewed.css";

import EditSidebox from "./EditSidebox";
import PromotedSideBox from "./PromotedSideBox";
import AlsoViewed from "./AlsoViewed";
import PeopleMayKnow from "./PeopleMayKnow";
import Learning from './Learning';

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2YjIwOWMyYzE4ODAwMTVhYjk0YTEiLCJpYXQiOjE2NDI1MDg4MTAsImV4cCI6MTY0MzcxODQxMH0.JAfyKqdxjSdTol524cwYXpcd7LDhynRxo5EuWv9T7Ac`,
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
    <div className="px-0">
      <EditSidebox />
      <PromotedSideBox />
      <AlsoViewed users={users} setUsers={setUsers} />
      <PeopleMayKnow users={users} setUsers={setUsers} />
      <Learning />
    </div>
  );
};

export default Sidebar;
