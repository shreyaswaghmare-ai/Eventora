import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import OrganizerDashboard from "./components/OrganizerDashboard";

import ProtectedRoute from "./components/ProtectedRoutes";
import OrganizerRoute from "./components/OrganizerRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>

          <Route path="/events" element={<Events />} />

          <Route element={<OrganizerRoute />}>

            <Route
              path="/organizer/dashboard"
              element={<OrganizerDashboard />}
            />

          </Route>

        </Route>

      </Routes>
    </>
  );
}

export default App;