import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav.jsx";
import Home from "./components/Home/Home.jsx";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts.jsx";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [userProfile, setUserProfile] = useState({});

  return (
    <>
      <BrowserRouter>
        <MyNav userProfile={userProfile} setUserProfile={setUserProfile} />
        <Routes>
          <Route
            path="/"
            element={
              <Home userProfile={userProfile} setUserProfile={setUserProfile} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
