import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav.jsx";
import Home from "./components/Home/Home";
import FooterPart from "./components/FooterPart/FooterPart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userProfile, setUserProfile] = useState({});

  return (
    <>
      <BrowserRouter>
        <MyNav userProfile={userProfile} setUserProfile={setUserProfile} />
        <Routes>
          <Route path="/" element={<Home userProfile={userProfile} />} />
        </Routes>
        {/* <FeaturedPosts /> */}
      </BrowserRouter>
      <FooterPart />
    </>
  );
}
export default App;
