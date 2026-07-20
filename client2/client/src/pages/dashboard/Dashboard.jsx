const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-blue-600 px-8 py-4 text-white shadow">
        <h1 className="text-2xl font-bold">
          HyperLocal Dashboard
        </h1>
      </div>

      <div className="p-10">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800">
            Welcome 👋
          </h2>

          <p className="mt-3 text-slate-600">
            Login Successful.
          </p>

          <p className="mt-6 text-lg font-medium text-blue-600">
            Frontend Authentication is Working.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;