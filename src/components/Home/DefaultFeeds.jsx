import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  return (
    <>
     <Profile userProfile={userProfile} setUserProfile={setUserProfile} />
      <div id="sidebar" className="pl-5 ml-5 mt-4">
        <Sidebar />
      </div>
    </>
  );
};
export default DefaultFeeds;
