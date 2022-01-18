import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav/MyNav.jsx'
<<<<<<< Updated upstream
import { BrowserRouter} from "react-router-dom";
function App() {
  return <>
    <BrowserRouter>
    <MyNav />
  
    </BrowserRouter>
  </>;
=======
import Profile from './components/Profile/Profile.jsx'
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";


function App() {
  
  const [userProfile, setUserProfile] = useState({}) //State lifting from Navbar
  
  return (
  <>
    <BrowserRouter>
    <MyNav userProfile={userProfile} setUserProfile={setUserProfile}/>
    <Routes>
      <Route path='/profile' element={<Profile userProfile={userProfile} />} />
    </Routes>
    <FeaturedPosts />
    </BrowserRouter>
  </>
  );
>>>>>>> Stashed changes
}
export default App;
