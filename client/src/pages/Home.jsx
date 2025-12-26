const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          College Placement Portal
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          A centralized platform for students and administrators to manage
          placements, eligibility, and recruitment drives efficiently.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Student Profile
          </h3>
          <p className="text-gray-600">
            Students can update academic details, skills, and track eligibility
            for placement drives.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Eligibility Checker
          </h3>
          <p className="text-gray-600">
            Automatically checks eligibility based on CGPA, backlogs, and
            academic criteria.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Admin Management
          </h3>
          <p className="text-gray-600">
            Admins can add companies, manage criteria, and monitor student
            eligibility.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-500">
        © 2025 Placement Portal. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
