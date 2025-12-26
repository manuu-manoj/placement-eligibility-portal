import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import AddCompany from "./pages/AddCompany";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentList from "./pages/StudentList";
import CompanyList from "./pages/CompanyList";
import AdminContactView from "./pages/AdminContactView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-company"
          element={
            <ProtectedRoute adminOnly>
              <AddCompany />
            </ProtectedRoute>
          }
        />
        {/* Admin - View Companies */}
        <Route
          path="/companies"
          element={
            <ProtectedRoute adminOnly>
              <CompanyList />
            </ProtectedRoute>
          }
        />

        {/* Admin - View Students */}
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute adminOnly>
              <StudentList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute adminOnly>
              <AdminContactView />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
