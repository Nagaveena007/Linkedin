import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";

const Home = ({ userProfile }) => {
  return (
    <>
      <Profile details={userProfile} />

      <FeaturedPosts />
      

    </>
  );
};
export default Home;
