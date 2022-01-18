import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import RandomUsersCard from "./RandomUsersCard";

const AlsoViewed = () => {
  const [users, setUsers] = useState([]);
  const [contentToShow, setContentToShow] = useState(false);
  const toggleShowMore = () => {
    setContentToShow(!contentToShow)
  }
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
    <Card id="also-viewed" className="mb-4">
      <Card.Title className="my-3 px-2 pt-2">People also viewed</Card.Title>

      {users.slice(0, 5).map((user) => (
        <RandomUsersCard
          src={user.image}
          alt={user.name}
          text={user.title}
          name={user.name}
          surname={user.surname}
          key={user._id}
        />
      ))}
      {contentToShow && (
        <div>
          {users.slice(6, 11).map((user) => (
            <RandomUsersCard
              src={user.image}
              alt={user.name}
              text={user.title}
              name={user.name}
              surname={user.surname}
              key={user._id}
            />
          ))}
        </div>
      )}
      <Button
        className="btn-connect card-bottom d-flex justify-content-center align-items-center"
        onClick={() => toggleShowMore()}
      >
        {contentToShow ? "Show less" : "Show more"}
        <i className="bi bi-chevron-compact-down ml-1"></i>
      </Button>
    </Card>
  );
};

export default AlsoViewed;
