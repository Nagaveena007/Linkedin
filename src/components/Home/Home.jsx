import { Link } from "react-router-dom";
import "../FeaturedPosts/FeaturedPosts";
import FooterPart from "../FooterPart/FooterPart";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import StartAPost from "../FeaturedPosts/StartAPost";
import "../Sidebar/Sidebar.css";

const Home = ({ userProfile, setUserProfile }) => {
  return (
    <>
      {/* LEFT Side Should Go Here */}
      
      <StartAPost />
      
      <div id="sidebar" className="pl-5 ml-5 mt-4">
        <Sidebar />
      </div>

    </>
  );
};

export default Home;
