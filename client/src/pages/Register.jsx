import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await API.post("/auth/register", form);
    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-indigo-600 flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Register
        </h2>

        <input
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full border rounded-lg px-4 py-2 mb-6 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
