import { useState, useEffect } from "react";
import "../FeaturedPosts/FeaturedPosts";
import SingleFeed from "./SingleFeed";
import "../Sidebar/Sidebar.css";
import "./Home.css";
import SinglePost from "./SinglePost";
import { Col, Container, Row } from "react-bootstrap";
import RightSidebar from "./HomeRightSidebar/RightSidebar";

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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDcyMDA1NDksImV4cCI6MTY0ODQxMDE0OX0.jvevIIFZ6m_8Kc_HzG1QONy_5QZdyHbXIrUnLvUm0JY`,
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
        .slice(0, 6)
        .map((post) => (
          <SingleFeed
            image={post.user.image}
            name={post.user.name}
            surname={post.user.surname}
            title={post.user.title}
            text={post.text}
            id={post._id}
            key={post._id}
          />
        ))
        .reverse()}
    </div>
    /*    <Container>
      <Row>
        <Col md={10}>
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
        </Col>
        <Col md={2}>
          <RightSidebar />
        </Col>
      </Row>
    </Container> */
  );
};
export default NewsFeed;
