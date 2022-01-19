import "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";

import "../Sidebar/Sidebar.css";

const Home = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Profile userProfile={userProfile} setUserProfile={setUserProfile} />
      <Sidebar />
    </>
  );
};

export default Home;
