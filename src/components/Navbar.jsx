import { Link } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-400/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950">
            <CalendarDays size={23} />
          </div>

          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Eventora
          </span>
        </Link>

       
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/events"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Events
          </Link>

          <Link
            to="/login"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:scale-105"
          >
            Get Started
          </Link>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-200 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-cyan-400/10 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="text-slate-300"
            >
              Home
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/events"
              className="text-slate-300"
            >
              Events
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/login"
              className="text-slate-300"
            >
              Login
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/register"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Get Started
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;