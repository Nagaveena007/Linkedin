import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Profile from "../Profile/Profile";

const Home = ({userProfile, setUserProfile}) => {
  return (
    <>
      <Profile userProfile={userProfile} setUserProfile={setUserProfile}/>
      {/* <FeaturedPosts /> */}
    </>
  );
};
export default Home;
