import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav.jsx";
import Home from "./components/Home/Home";
import FooterPart from "./components/FooterPart/FooterPart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Home1 from "./components/Home/Home1";
import NotFound from "./components/NotFound";
function App() {
  /*  const [loggedInUser,seLloggedInUser ] */
  const [userProfile, setUserProfile] = useState({});

  return (
    <>
      <BrowserRouter>
        <MyNav userProfile={userProfile} setUserProfile={setUserProfile} />

        <Routes>
          <Route
            path="/"
            element={
              <Home1
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            }
          />

          <Route
            path="/profile/:id"
            element={
              <Home userProfile={userProfile} setUserProfile={setUserProfile} />
            }
          />
          <Route path="*" element={<NotFound error="Page not found" />} />
        </Routes>
        {/* <FeaturedPosts /> */}
      </BrowserRouter>
      <FooterPart />
    </>
  );
}
export default App;
