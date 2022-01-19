import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import StartAPost from "../FeaturedPosts/StartAPost";
import "../Sidebar/Sidebar.css";
const DefaultFeeds = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">

          </div>
          <div className="col-6">
            <StartAPost />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div id="sidebar" className="pl-5 ml-5 ">
        <Sidebar />
      </div>



    </>
  );
};
export default DefaultFeeds;
