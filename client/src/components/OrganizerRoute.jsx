import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function OrganizerRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-cyan-400">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "organizer") {
    return <Navigate to="/events" replace />;
  }

  return <Outlet />;
}

export default OrganizerRoute;