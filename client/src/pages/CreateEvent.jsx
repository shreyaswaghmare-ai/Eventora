import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    date: "",
    location: "",
    price: "",
    availableTickets: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      // Build payload matching standard Express/Mongoose schemas
      const payload = {
        title: formData.title,
        category: formData.category,
        date: formData.date,
        location: formData.location,
        price: Number(formData.price),
        availableTickets: Number(formData.availableTickets),
        totalTickets: Number(formData.availableTickets), // Included if schema expects totalTickets
        description: formData.description,
      };

      await axios.post("http://localhost:5000/api/events", payload, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      // Redirect directly to the public Events page upon successful creation
      navigate("/events");
    } catch (err) {
      console.error("Create event error details:", err.response?.data);
      setError(
        err.response?.data?.message || 
        err.response?.data?.error || 
        "Failed to create event. Please check backend log."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-6 pb-20 pt-32 max-w-3xl mx-auto text-white">
      <Link to="/organizer/dashboard" className="text-sm text-slate-400 hover:text-cyan-400 transition">
        &larr; Back to Dashboard
      </Link>
      
      <h1 className="mt-4 text-3xl font-bold">Create New Event</h1>
      {error && <p className="mt-3 text-sm text-red-400 font-semibold">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <div>
          <label className="block text-sm text-slate-400">Event Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="Technology">Technology</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400">Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-400">Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400">Price (₹)</label>
            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400">Tickets Available</label>
            <input
              type="number"
              name="availableTickets"
              required
              value={formData.availableTickets}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3 font-bold text-slate-950 transition hover:scale-[1.01]"
        >
          {loading ? "Publishing..." : "Publish Event"}
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;