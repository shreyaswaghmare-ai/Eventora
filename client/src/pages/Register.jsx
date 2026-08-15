import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-20">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

        <h1 className="text-3xl font-bold">
          Create your account 🚀
        </h1>

        <p className="mt-2 text-slate-400">
          Join Eventora and discover amazing events.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Account Type
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-slate-300 outline-none">
              <option>Attendee</option>
              <option>Organizer</option>
            </select>
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3.5 font-bold text-slate-950 transition hover:scale-[1.02]">
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;