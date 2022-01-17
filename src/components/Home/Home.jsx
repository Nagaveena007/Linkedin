import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar"

const Home = ({ userProfile }) => {
  return (
    <>
      <Profile details={userProfile} />

      <FeaturedPosts />
      <div id="sidebar"><Sidebar/></div>
      

    </>
  );
};
export default Home;
