/* import UsereProfile from "../Profile/UsereProfile";
import { Col } from "react-bootstrap";
const NewsFeed = ({ userProfile, setUserProfile }) => {
  return (
    <Col className="home__wrap pr-5">
      <UsereProfile userProfile={userProfile} setUserProfile={setUserProfile} />
    </Col>
  );
};

export default NewsFeed;
 */
import { useState, useEffect } from "react";
import "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import SingleFeed from "./SingleFeed";
import "../Sidebar/Sidebar.css";
import "./Home.css";

const NewsFeed = ({ userProfile, setUserProfile }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2YjIwOWMyYzE4ODAwMTVhYjk0YTEiLCJpYXQiOjE2NDI1MDg4MTAsImV4cCI6MTY0MzcxODQxMH0.JAfyKqdxjSdTol524cwYXpcd7LDhynRxo5EuWv9T7Ac`,
          },
        }
      );
      if (response.ok) {
        let responseJson = await response.json();
        console.log("POSTS", responseJson);
        setPosts(responseJson);
        return posts;
      } else {
        console.log("error on fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="feed" className="d-flex align-items-center flex-column">
      {posts
        .filter((post) => post.user)
        .map((post) => (
          <SingleFeed
            image={post.user.image}
            name={post.user.name}
            surname={post.user.surname}
            title={post.user.title}
            text={post.text}
            key={post._id}
          />
        ))}
    </div>
  );
};
export default NewsFeed;
