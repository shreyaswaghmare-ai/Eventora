import { Calendar, MapPin, Ticket, Users } from "lucide-react";

function EventDetails() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32">

      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

          {/* Event Image */}
          <div className="flex h-72 items-center justify-center bg-gradient-to-br from-cyan-400/20 via-teal-400/10 to-emerald-400/20 sm:h-96">

            <Calendar
              size={110}
              className="text-cyan-300 opacity-60"
            />

          </div>

          <div className="p-8">

            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
              Technology
            </span>

            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              TechFest 2026
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Join developers, students, innovators and technology
              enthusiasts for an exciting day filled with workshops,
              competitions, networking and technology talks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <Info
                icon={<Calendar />}
                title="Date"
                value="25 August 2026"
              />

              <Info
                icon={<MapPin />}
                title="Location"
                value="Amravati"
              />

              <Info
                icon={<Users />}
                title="Availability"
                value="153 tickets left"
              />

            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Starting from
                </p>

                <p className="text-3xl font-bold text-emerald-400">
                  ₹299
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105">
                <Ticket size={20} />
                Book Your Ticket
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-950/50 p-5">

      <div className="text-cyan-400">
        {icon}
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}

export default EventDetails;