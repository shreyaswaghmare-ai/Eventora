import { Search, MapPin, Calendar } from "lucide-react";

function Events() {
  const events = [
    {
      title: "TechFest 2026",
      category: "Technology",
      location: "Amravati",
      date: "25 Aug 2026",
      price: "₹299",
    },
    {
      title: "AI & Future Workshop",
      category: "Workshop",
      location: "Nagpur",
      date: "28 Aug 2026",
      price: "₹499",
    },
    {
      title: "College Cultural Night",
      category: "Cultural",
      location: "Amravati",
      date: "02 Sep 2026",
      price: "₹199",
    },
    {
      title: "Startup Summit",
      category: "Business",
      location: "Pune",
      date: "10 Sep 2026",
      price: "₹799",
    },
  ];

  return (
    <div className="min-h-screen px-6 pb-20 pt-32">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="font-semibold text-cyan-400">
            DISCOVER
          </p>

          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Explore Events
          </h1>

          <p className="mt-4 text-slate-400">
            Find your next experience.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 md:flex-row">

          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-950/70 px-4">
            <Search className="text-slate-500" size={20} />

            <input
              type="text"
              placeholder="Search events..."
              className="w-full bg-transparent py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <select className="rounded-xl bg-slate-950 px-5 py-3 text-slate-300 outline-none">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Music</option>
            <option>Education</option>
            <option>Sports</option>
            <option>Workshop</option>
          </select>

          <select className="rounded-xl bg-slate-950 px-5 py-3 text-slate-300 outline-none">
            <option>Any Price</option>
            <option>Free</option>
            <option>Under ₹500</option>
            <option>Under ₹1000</option>
          </select>

        </div>

        {/* Events */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {events.map((event, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
            >

              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-400/20 via-teal-400/10 to-emerald-400/20">

                <Calendar
                  size={65}
                  className="text-cyan-300 opacity-70"
                />

              </div>

              <div className="p-5">

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                  {event.category}
                </span>

                <h2 className="mt-4 text-xl font-bold">
                  {event.title}
                </h2>

                <div className="mt-4 space-y-2 text-sm text-slate-500">

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {event.date}
                  </div>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-lg font-bold text-emerald-400">
                    {event.price}
                  </span>

                  <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950">
                    View Event
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Events;