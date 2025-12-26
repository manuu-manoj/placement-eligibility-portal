import { useEffect, useState } from "react";
import API from "../services/api";

const EligibleCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    API.get("/student/eligible").then(res => setCompanies(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Eligible Companies</h2>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Company</th>
            <th className="p-3">CTC</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(c => (
            <tr key={c._id} className="border-t">
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EligibleCompanies;
