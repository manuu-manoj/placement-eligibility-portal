import { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    window.location.href =
      res.data.user.role === "admin" ? "/admin" : "/student";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 to-blue-600 flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <input
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border rounded-lg px-4 py-2 mb-6 focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          New user?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
