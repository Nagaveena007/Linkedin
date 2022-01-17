import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav/MyNav.jsx'
import { BrowserRouter} from "react-router-dom";
function App() {
  return <>
    <BrowserRouter>
    <MyNav />
  
    </BrowserRouter>
  </>;
}

export default App;
