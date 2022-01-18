import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
const Home1 = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Profile userProfile={userProfile} setUserProfile={setUserProfile} />
      <Sidebar />
    </>
  );
};
export default Home1;
