import { useEffect, useState } from "react";
import API from "../services/api";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.get("/student")
      .then(res => setStudents(res.data))
      .catch(() => alert("Failed to load students"));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Student List
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full border-collapse">
          {/* HEADER */}
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Department</th>
              <th className="px-6 py-4 text-center font-semibold">CGPA</th>
              <th className="px-6 py-4 text-center font-semibold">Backlogs</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-6 text-center text-gray-500"
                >
                  No students found
                </td>
              </tr>
            ) : (
              students.map((s, index) => (
                <tr
                  key={s._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="px-6 py-4 text-gray-800">
                    {s.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {s.email}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {s.department || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-center font-medium">
                    {s.cgpa ?? "N/A"}
                  </td>
                  <td className="px-6 py-4 text-center font-medium">
                    {s.backlogs ?? "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
