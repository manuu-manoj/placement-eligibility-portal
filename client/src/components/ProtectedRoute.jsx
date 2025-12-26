import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/" />;
  }

  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/student" />;
  }

  return children;
};

export default ProtectedRoute;
