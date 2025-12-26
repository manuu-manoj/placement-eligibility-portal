const Student = require("../models/Student");
const Company = require("../models/Company");

// ================= STUDENT =================

exports.getProfile = async (req, res) => {
  const student = await Student.findById(req.user.id).select("-password");
  res.json(student);
};

exports.updateProfile = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  ).select("-password");

  res.json(updated);
};

exports.getEligibleCompanies = async (req, res) => {
  const student = await Student.findById(req.user.id);
  const companies = await Company.find();

  const eligible = companies.filter((c) => {
    return (
      student.cgpa >= c.criteria.minCGPA &&
      student.tenthPercent >= c.criteria.min10 &&
      student.twelfthPercent >= c.criteria.min12 &&
      student.backlogs <= c.criteria.maxBacklogs
    );
  });

  res.json(eligible);
};

// ================= ADMIN =================

exports.getAllStudents = async (req, res) => {
  try {
    // 🔐 only admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const students = await Student.find({ role: "student" })
      .select("-password -__v");

    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
};
