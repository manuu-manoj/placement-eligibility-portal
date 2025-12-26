const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  getProfile,
  updateProfile,
  getEligibleCompanies,
  getAllStudents   // 👈 ADD THIS
} = require("../controller/studentController");

// student
router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);
router.get("/eligible", auth, getEligibleCompanies);

// admin
router.get("/", auth, getAllStudents); // 👈 THIS FIXES 404

module.exports = router;
