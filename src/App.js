import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

import MyNav from "./components/MyNav/MyNav.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
