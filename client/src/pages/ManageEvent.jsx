import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrganizerEvents();
  }, []);

  const fetchOrganizerEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/events/my-events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to load events", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(events.filter((e) => e._id !== id));
    } catch (err) {
      alert("Failed to delete event");
    }
  };

  return (
    <div className="min-h-screen px-6 pb-20 pt-32 max-w-5xl mx-auto text-white">
      <Link to="/organizer/dashboard" className="text-sm text-slate-400 hover:text-cyan-400 transition">
        &larr; Back to Dashboard
      </Link>

      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Your Events</h1>
        <Link
          to="/organizer/create-event"
          className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
        >
          + Create New
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 text-slate-400">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="mt-8 text-slate-400">You haven't created any events yet.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div>
                <h3 className="font-bold text-lg text-white">{event.title}</h3>
                <p className="text-xs text-slate-400">
                  📍 {event.location} | 📅 {new Date(event.date).toLocaleDateString()} | ₹{event.price}
                </p>
              </div>

              <button
                onClick={() => handleDelete(event._id)}
                className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageEvents;