import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav/MyNav.jsx'
import Profile from './components/Profile/Profile.jsx'
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import Home from "./components/Home/Home";

import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [userProfile, setUserProfile] = useState({});

  return (
  <>
    <BrowserRouter>
    <MyNav userProfile={userProfile} setUserProfile={setUserProfile}/>
    <Routes>
      <Route path='/profile' element={<Home userProfile={userProfile} />} />
    </Routes>
    {/* <FeaturedPosts /> */}
    </BrowserRouter>
  </>
  );
}
export default App;
