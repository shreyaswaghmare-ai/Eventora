import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-extrabold text-emerald-400">
          Eventora
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/events" className="text-slate-300 hover:text-white transition">
            Events
          </Link>

          {/* Conditional Rendering */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Avatar Icon Only */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500 font-bold text-slate-950 transition hover:scale-105 hover:ring-2 hover:ring-emerald-400"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span>{user.name ? user.name.charAt(0).toUpperCase() : "U"}</span>
                )}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl backdrop-blur-xl">
                  {/* User Info Header */}
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="font-semibold text-white truncate">{user.name}</p>
                    <p className="text-xs text-slate-400 capitalize">{user.role}</p>
                  </div>

                  {/* Menu Options */}
                  <div className="py-1">
                    {user.role === "organizer" && (
                      <Link
                        to="/organizer/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                      >
                        Dashboard
                      </Link>
                    )}
                    
                    <Link
                      to="/settings"
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                    >
                      Settings
                    </Link>
                  </div>

                  {/* Logout Button */}
                  <div className="border-t border-white/10 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;