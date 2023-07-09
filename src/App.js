import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import LoginPage from "./pages/Login Page/LoginPage";
import SignUpPage from "./pages/Sign Up Page/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/List/List";
import Destination from "./Context/destination";
import ProfilePage from "./pages/Profile/ProfilePage";
import AppointmentPage from "./pages/AppointmentsPage/AppointmentPage";
import { Alert } from "./Components/Alert/Alert";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <Destination>
      <BrowserRouter>
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/LoginPage"
            element={<LoginPage showAlert={showAlert} />}
          />
          <Route
            path="/SignUpPage"
            element={<SignUpPage showAlert={showAlert} />}
          />
          <Route
            path="/Dashboard"
            element={<Dashboard showAlert={showAlert} />}
          />
          <Route path="/MentorsList" element={<List showAlert={showAlert} />} />
          <Route
            path="/Profile"
            element={<ProfilePage showAlert={showAlert} />}
          />
          <Route
            path="/Appointment"
            element={<AppointmentPage showAlert={showAlert} />}
          />
        </Routes>
      </BrowserRouter>
    </Destination>
  );
}

export default App;
