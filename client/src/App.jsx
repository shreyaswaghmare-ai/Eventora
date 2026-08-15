import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventsDetails";
import OrganizerDashboard from "./components/OrganizerDashboard";

import ProtectedRoute from "./components/ProtectedRoutes"; 
import OrganizerRoute from "./components/OrganizerRoute";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";
import ManageEvents from "./pages/ManageEvent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organizer/create-event" element={<CreateEvent />} />
        <Route path="/organizer/manage-events" element={<ManageEvents />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />

          {/* Organizer-Only Routes */}
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