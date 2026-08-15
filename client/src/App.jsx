function App() {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Eventora
        </h1>

        <p className="mt-4 text-slate-400 text-lg">
          Smart Event Management & Ticket Booking
        </p>

        <button className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition">
          Explore Events
        </button>
      </div>
    </div>
  );
}

export default App;