import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import RestoHome from "./pages/RestoHome";
import AddRestaurant from "./pages/AddRestaurant";
import EditRestaurant from "./pages/EditRestaurant";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}

      <Router>
        <Routes>
          <Route path="/" element={<RestoHome />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
        </Routes>
      </Router>
    </div>
  );
}
