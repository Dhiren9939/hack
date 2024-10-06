import SignUp from "./signup/login/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./signup/login/Login";
import LandingPage from "./LandingPage";
import PrivateRoute from "./PrivateRoute";
import Employee from "./user/Employee";
import Admin from "./user/Admin";
import Userdetails from "./Userdetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route
            path="/edash"
            element={
              <PrivateRoute>
                {" "}
                <Employee />
              </PrivateRoute>
            }
          />
          <Route
            path="/adash"
            element={
              <PrivateRoute>
                {" "}
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="/details" element={<Userdetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
