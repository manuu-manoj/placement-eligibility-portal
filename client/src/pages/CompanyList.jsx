import { useEffect, useState } from "react";
import API from "../services/api";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchCompanies = async () => {
    try {
      const res = await API.get("/company");
      setCompanies(res.data);
    } catch (err) {
      console.error("Failed to fetch companies", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCompany = async (id) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;

    try {
      await API.delete(`/company/${id}`);
      setCompanies(companies.filter((c) => c._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading companies...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Company List
      </h2>

      {companies.length === 0 ? (
        <p className="text-gray-500">No companies available.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full border-collapse">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">CTC</th>
                <th className="p-3 text-left">Min CGPA</th>
                <th className="p-3 text-left">Max Backlogs</th>
                {user?.role === "admin" && (
                  <th className="p-3 text-center">Actions</th>
                )}
              </tr>
            </thead>

            <tbody>
              {companies.map((c) => (
                <tr
                  key={c._id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3">{c.role || "-"}</td>
                  <td className="p-3">{c.ctc}</td>
                  <td className="p-3">{c.criteria?.minCGPA}</td>
                  <td className="p-3">{c.criteria?.maxBacklogs}</td>

                  {user?.role === "admin" && (
                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteCompany(c._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
