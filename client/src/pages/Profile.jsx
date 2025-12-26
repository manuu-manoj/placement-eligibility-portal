import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    department: "",
    skills: "",
    cgpa: "",
    tenthPercent: "",
    twelfthPercent: "",
    backlogs: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 🔐 Load profile on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    API.get("/student/profile")
      .then((res) => {
        setProfile({
          department: res.data.department ?? "",
          skills: (res.data.skills || []).join(", "),
          cgpa: res.data.cgpa ?? "",
          tenthPercent: res.data.tenthPercent ?? "",
          twelfthPercent: res.data.twelfthPercent ?? "",
          backlogs: res.data.backlogs ?? ""
        });
        setLoading(false);
      })
      .catch(() => {
        alert("Session expired. Please login again.");
        localStorage.clear();
        navigate("/");
      });
  }, [navigate]);

  // 💾 Save profile
  const save = async () => {
    try {
      setSaving(true);

      const payload = {
        department: profile.department,
        skills: profile.skills
          .split(",")
          .map(skill => skill.trim())
          .filter(Boolean),
        cgpa: Number(profile.cgpa),
        tenthPercent: Number(profile.tenthPercent),
        twelfthPercent: Number(profile.twelfthPercent),
        backlogs: Number(profile.backlogs)
      };

      await API.put("/student/profile", payload);
      alert("Profile updated");
      navigate("/student");

    } catch (err) {
      console.error(err);
      alert("Profile update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Academic Profile</h2>

      <input
        className="input"
        placeholder="Department (e.g. CSE)"
        value={profile.department}
        onChange={(e) =>
          setProfile({ ...profile, department: e.target.value })
        }
      />

      <input
        className="input mt-2"
        placeholder="Skills (comma separated)"
        value={profile.skills}
        onChange={(e) =>
          setProfile({ ...profile, skills: e.target.value })
        }
      />

      <input
        type="number"
        step="0.01"
        className="input mt-2"
        placeholder="CGPA"
        value={profile.cgpa}
        onChange={(e) =>
          setProfile({ ...profile, cgpa: e.target.value })
        }
      />

      <input
        type="number"
        className="input mt-2"
        placeholder="10th Percentage"
        value={profile.tenthPercent}
        onChange={(e) =>
          setProfile({ ...profile, tenthPercent: e.target.value })
        }
      />

      <input
        type="number"
        className="input mt-2"
        placeholder="12th Percentage"
        value={profile.twelfthPercent}
        onChange={(e) =>
          setProfile({ ...profile, twelfthPercent: e.target.value })
        }
      />

      <input
        type="number"
        className="input mt-2"
        placeholder="Backlogs"
        value={profile.backlogs}
        onChange={(e) =>
          setProfile({ ...profile, backlogs: e.target.value })
        }
      />

      <button
        onClick={save}
        disabled={saving}
        className="btn-primary mt-4 w-full disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default Profile;
