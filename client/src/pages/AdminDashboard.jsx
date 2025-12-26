import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-6 rounded-xl shadow mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-sm opacity-90">
          Manage students, companies, and placement eligibility
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Add Company */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Add Company
          </h3>
          <p className="text-gray-600 mb-4">
            Add new companies with eligibility criteria and drive details.
          </p>
          <button
            onClick={() => navigate("/admin/add-company")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            Add Company
          </button>
        </div>

        {/* View Companies */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            View Companies
          </h3>
          <p className="text-gray-600 mb-4">
            View all registered companies and manage placement drives.
          </p>
          <button
            onClick={() => navigate("/companies")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            View Companies
          </button>
        </div>

        {/* Student Overview */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Students
          </h3>
          <p className="text-gray-600 mb-4">
            Monitor student profiles and eligibility status.
          </p>
          <button
            onClick={() => navigate("/admin/students")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            View Students
          </button>
        </div>

        {/* 🔔 VIEW CONTACT DETAILS (ADMIN ONLY) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Contact Messages</h3>
          <p className="text-gray-600 mb-3">
            View queries sent by users
          </p>
          <button
            onClick={() => navigate("/admin/contacts")}
            className="btn-primary"
          >
            View Contacts
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 mt-12">
        © 2025 Placement Portal – Admin Panel
      </div>
    </div>
  );
};

export default AdminDashboard;
