const PublicHomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 shadow-lg">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            QBten
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
          Connect.
          <span className="text-blue-600"> Share.</span>
          <br />
          Build Communities.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          QBten is a modern social media platform where people can share ideas,
          create communities, join discussions, and connect with others around
          the world.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
            Explore Posts
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">10K+</h3>
            <p className="mt-1 text-sm text-slate-500">Active Users</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">2K+</h3>
            <p className="mt-1 text-sm text-slate-500">Communities</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">500K+</h3>
            <p className="mt-1 text-sm text-slate-500">Posts Shared</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicHomePage;