import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import LoginPage from "./pages/Login Page/LoginPage";
import SignUpPage from "./pages/Sign Up Page/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/List/List";
import Destination from "./Context/destination";

function App() {
  return (
    <Destination>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Mentors" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Destination>
  );
}

export default App;
