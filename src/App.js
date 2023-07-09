import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import LoginPage from "./pages/Login Page/LoginPage";
import SignUpPage from "./pages/Sign Up Page/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/List/List";
import Destination from "./Context/destination";
import ProfilePage from "./pages/Profile/ProfilePage";
import AppointmentPage from "./pages/AppointmentsPage/AppointmentPage";
function App() {
  return (
    <Destination>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MentorsList" element={<List />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Appointment" element={<AppointmentPage />} />
        </Routes>
      </BrowserRouter>
    </Destination>
  );
}

export default App;
