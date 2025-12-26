import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const AddCompany = () => {
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    name: "",
    role: "",
    ctc: "",
    criteria: {
      minCGPA: "",  
      min10: "",
      min12: "",
      maxBacklogs: ""
    },
    driveDate: ""
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      alert("Admin access only");
      navigate("/");
    }
  }, [navigate]);

  const submit = async () => {
    try {
      const payload = {
        name: company.name,
        role: company.role,
        ctc: company.ctc,
        criteria: {
          minCGPA: Number(company.criteria.minCGPA),
          min10: Number(company.criteria.min10),
          min12: Number(company.criteria.min12),
          maxBacklogs: Number(company.criteria.maxBacklogs)
        },
        driveDate: company.driveDate
      };

      await API.post("/company", payload);
      alert("Company added successfully");

      setCompany({
        name: "",
        role: "",
        ctc: "",
        criteria: {
          minCGPA: "",
          min10: "",
          min12: "",
          maxBacklogs: ""
        },
        driveDate: ""
      });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add company");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Company (Admin)
      </h2>

      <input
        className="input mb-3"
        placeholder="Company Name"
        value={company.name}
        onChange={(e) =>
          setCompany({ ...company, name: e.target.value })
        }
      />

      <input
        className="input mb-3"
        placeholder="Job Role"
        value={company.role}
        onChange={(e) =>
          setCompany({ ...company, role: e.target.value })
        }
      />

      <input
        className="input mb-3"
        placeholder="CTC (e.g. 6 LPA)"
        value={company.ctc}
        onChange={(e) =>
          setCompany({ ...company, ctc: e.target.value })
        }
      />

      <input
        type="number"
        className="input mb-3"
        placeholder="Minimum CGPA"
        value={company.criteria.minCGPA}
        onChange={(e) =>
          setCompany({
            ...company,
            criteria: {
              ...company.criteria,
              minCGPA: e.target.value
            }
          })
        }
      />

      <input
        type="number"
        className="input mb-3"
        placeholder="Minimum 10th Percentage"
        value={company.criteria.min10}
        onChange={(e) =>
          setCompany({
            ...company,
            criteria: {
              ...company.criteria,
              min10: e.target.value
            }
          })
        }
      />

      <input
        type="number"
        className="input mb-3"
        placeholder="Minimum 12th Percentage"
        value={company.criteria.min12}
        onChange={(e) =>
          setCompany({
            ...company,
            criteria: {
              ...company.criteria,
              min12: e.target.value
            }
          })
        }
      />

      <input
        type="number"
        className="input mb-3"
        placeholder="Maximum Backlogs Allowed"
        value={company.criteria.maxBacklogs}
        onChange={(e) =>
          setCompany({
            ...company,
            criteria: {
              ...company.criteria,
              maxBacklogs: e.target.value
            }
          })
        }
      />

      <input
        type="date"
        className="input mb-4"
        value={company.driveDate}
        onChange={(e) =>
          setCompany({ ...company, driveDate: e.target.value })
        }
      />

      <button
        onClick={submit}
        className="btn-primary w-full"
      >
        Add Company
      </button>
    </div>
  );
};

export default AddCompany;
