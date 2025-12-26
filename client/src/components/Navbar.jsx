import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded transition ${isActive
      ? "bg-indigo-600 text-white"
      : "text-gray-300 hover:bg-slate-700"
    }`;

  return (
    <nav className="bg-slate-900 px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">
        Placement Portal
      </h1>

      <div className="flex gap-3 items-center">
        {/* 🔓 BEFORE LOGIN */}
        {!token && (
          <>
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
            <NavLink to="/register" className={linkClass}>Register</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </>
        )}

        {/* 👨‍💼 ADMIN AFTER LOGIN */}
        {token && user?.role === "admin" && (
          <>
            <NavLink to="/admin" className={linkClass}>
              Dashboard
            </NavLink>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Logout
            </button>
          </>
        )}

        {/* 👨‍🎓 STUDENT AFTER LOGIN */}
        {token && user?.role === "student" && (
          <>
            <NavLink to="/student" className={linkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/profile" className={linkClass}>
              Profile
            </NavLink>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
