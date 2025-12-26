import { useEffect, useState } from "react";
import API from "../services/api";

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [eligibleCompanies, setEligibleCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const profileRes = await API.get("/student/profile");
        const eligibleRes = await API.get("/student/eligible");

        setUser(profileRes.data);
        setEligibleCompanies(eligibleRes.data);
      } catch {
        console.log("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg font-semibold">
        Loading dashboard...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-6 rounded-xl shadow mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {user.name}
        </h1>
        <p className="mt-2 text-sm opacity-90">
          Department: {user.department || "Not updated"}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">CGPA</p>
          <h2 className="text-3xl font-bold text-indigo-600">
            {user.cgpa ?? "N/A"}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Backlogs</p>
          <h2 className="text-3xl font-bold text-green-600">
            {user.backlogs ?? "N/A"}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.skills?.length > 0
              ? user.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))
              : "No skills added"}
          </div>
        </div>
      </div>

      {/* Eligible Companies */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">
          Eligible Companies
        </h2>

        {eligibleCompanies.length === 0 ? (
          <p className="text-gray-500">
            You are currently not eligible for any companies.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibleCompanies.map(company => (
              <div
                key={company._id}
                className="bg-white p-4 rounded-xl shadow"
              >
                <h3 className="text-lg font-semibold text-indigo-600">
                  {company.name}
                </h3>
                <p>Role: {company.role}</p>
                <p>CTC: {company.ctc}</p>
                <p>
                  Drive Date:{" "}
                  {new Date(company.driveDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
