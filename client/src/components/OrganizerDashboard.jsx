import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function OrganizerDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalBookings: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // Fetch organizer events & statistics from API
        const response = await axios.get(
          "http://localhost:5000/api/events/my-events",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const events = response.data || [];
        const totalEventsCount = events.length;

        // Calculate bookings and revenue from fetched events
        const totalBookingsCount = events.reduce(
          (acc, event) => acc + (event.bookedCount || 0),
          0
        );

        const totalRevenueCalculated = events.reduce(
          (acc, event) => acc + (event.bookedCount || 0) * (event.price || 0),
          0
        );

        setStats({
          totalEvents: totalEventsCount,
          totalBookings: totalBookingsCount,
          revenue: totalRevenueCalculated,
        });
      } catch (error) {
        console.error("Error loading dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-sm font-medium text-cyan-400">
            ORGANIZER DASHBOARD
          </p>

          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Welcome, {user?.name || "Organizer"} 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Create, manage and monitor your events from one place.
          </p>
        </div>

        {/* Dynamic Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Total Events */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Total Events</p>
            <h2 className="mt-3 text-4xl font-black">
              {loading ? "..." : stats.totalEvents}
            </h2>
            <p className="mt-2 text-sm text-slate-500">Events created by you</p>
          </div>

          {/* Total Bookings */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Total Bookings</p>
            <h2 className="mt-3 text-4xl font-black">
              {loading ? "..." : stats.totalBookings}
            </h2>
            <p className="mt-2 text-sm text-slate-500">Tickets booked</p>
          </div>

          {/* Revenue */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Revenue</p>
            <h2 className="mt-3 text-4xl font-black">
              {loading ? "..." : `₹${stats.revenue}`}
            </h2>
            <p className="mt-2 text-sm text-slate-500">Total event revenue</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Create New Event Card */}
          <Link
            to="/organizer/create-event"
            className="group rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="text-4xl">➕</div>

            <h2 className="mt-5 text-2xl font-bold">Create New Event</h2>

            <p className="mt-2 text-slate-400">
              Publish your next event on Eventora.
            </p>

            <div className="mt-6 text-sm font-semibold text-cyan-400">
              Create Event &rarr;
            </div>
          </Link>

          {/* Manage Events Card */}
          <Link
            to="/organizer/manage-events"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-emerald-400/30"
          >
            <div className="text-4xl">📋</div>

            <h2 className="mt-5 text-2xl font-bold">Manage Events</h2>

            <p className="mt-2 text-slate-400">
              View and manage all your published events.
            </p>

            <div className="mt-6 text-sm font-semibold text-emerald-400">
              Manage Events &rarr;
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrganizerDashboard;