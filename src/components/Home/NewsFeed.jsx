import { useState, useEffect } from "react";
import "../FeaturedPosts/FeaturedPosts";
import SingleFeed from "./SingleFeed";
import "../Sidebar/Sidebar.css";
import "./Home.css";
import SinglePost from "./SinglePost";

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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ODM3OWMyYzE4ODAwMTVhYjk0OWMiLCJpYXQiOjE2NDI0OTY4OTAsImV4cCI6MTY0MzcwNjQ5MH0.T6x0XrVZuqOI5X7c5AEoxgXRux2f4Q_UHHjEvuutJCc
            `,
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
          <SinglePost
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
  );
};
export default NewsFeed;
