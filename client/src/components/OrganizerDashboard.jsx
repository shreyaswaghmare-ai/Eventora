import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function OrganizerDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-sm font-medium text-cyan-400">
            ORGANIZER DASHBOARD
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Create, manage and monitor your events from one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">
              Total Events
            </p>

            <h2 className="mt-3 text-4xl font-black">
              0
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Events created by you
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">
              Total Bookings
            </p>

            <h2 className="mt-3 text-4xl font-black">
              0
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Tickets booked
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">
              Revenue
            </p>

            <h2 className="mt-3 text-4xl font-black">
              ₹0
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Total event revenue
            </p>
          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <Link
            to="/organizer/create-event"
            className="group rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="text-4xl">
              ➕
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Create New Event
            </h2>

            <p className="mt-2 text-slate-400">
              Publish your next event on Eventora.
            </p>

            <div className="mt-6 text-sm font-semibold text-cyan-400">
              Create Event →
            </div>
          </Link>

          <Link
            to="/organizer/events"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-emerald-400/30"
          >
            <div className="text-4xl">
              📋
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Manage Events
            </h2>

            <p className="mt-2 text-slate-400">
              View and manage all your published events.
            </p>

            <div className="mt-6 text-sm font-semibold text-emerald-400">
              Manage Events →
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default OrganizerDashboard;