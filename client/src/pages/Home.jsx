import {
  ArrowRight,
  Calendar,
  MapPin,
  Search,
  Ticket,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">

      <section className="relative flex min-h-screen items-center px-6 pt-24">

        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Zap size={16} />
              The smarter way to discover events
            </div>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">

              Discover.

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Book.
              </span>

              <br />

              Experience.

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Discover exciting events, book your tickets instantly,
              and create unforgettable experiences with Eventora.
            </p>

            <div className="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

              <Search className="ml-3 text-slate-500" size={22} />

              <input
                type="text"
                placeholder="Search events, workshops, concerts..."
                className="w-full bg-transparent px-2 py-3 text-white outline-none placeholder:text-slate-500"
              />

              <Link
                to="/events"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-semibold text-slate-950"
              >
                Search
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/events"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:scale-105"
              >
                Explore Events
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/40"
              >
                Create Account
              </Link>

            </div>

          </div>

          <div className="relative hidden lg:block">

            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-cyan-400/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Featured Event
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    TechFest 2026
                  </h3>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <Calendar size={25} />
                </div>
              </div>

              <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-teal-400/10 to-emerald-400/20">

                <Ticket
                  size={100}
                  className="text-cyan-300 opacity-80"
                />

              </div>

              <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={17} />
                  Amravati
                </div>

                <span className="font-bold text-emerald-400">
                  ₹299
                </span>

              </div>

              <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3 font-bold text-slate-950">
                Book Ticket
              </button>

            </div>

          </div>

        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-16">

        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            icon={<Calendar />}
            number="500+"
            text="Events"
          />

          <Stat
            icon={<Users />}
            number="10K+"
            text="Attendees"
          />

          <Stat
            icon={<Ticket />}
            number="25K+"
            text="Tickets Sold"
          />

          <Stat
            icon={<Zap />}
            number="99%"
            text="Happy Users"
          />

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="font-semibold text-cyan-400">
              EXPLORE
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Find events you'll love
            </h2>

            <p className="mt-3 text-slate-400">
              Explore events across different categories.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <Category title="Technology" icon="💻" />
            <Category title="Music" icon="🎵" />
            <Category title="Education" icon="🎓" />
            <Category title="Sports" icon="🏆" />
            <Category title="Business" icon="💼" />
            <Category title="Workshop" icon="🧑‍💻" />
            <Category title="Cultural" icon="🎨" />
            <Category title="Other Events" icon="✨" />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-emerald-400/10 p-10 text-center">

          <h2 className="text-4xl font-bold">
            Have an event to organize?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Create your event, manage registrations, sell tickets,
            and track attendance — all from one platform.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-7 py-3.5 font-bold text-slate-950 transition hover:scale-105"
          >
            Start Organizing
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

function Stat({ icon, number, text }) {
  return (
    <div className="text-center">

      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {number}
      </h3>

      <p className="mt-1 text-slate-500">
        {text}
      </p>

    </div>
  );
}

function Category({ title, icon }) {
  return (
    <Link
      to="/events"
      className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/5"
    >
      <span className="text-3xl">
        {icon}
      </span>

      <h3 className="mt-4 font-semibold text-white group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Explore events
      </p>
    </Link>
  );
}

export default Home;