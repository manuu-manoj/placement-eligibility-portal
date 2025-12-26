const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  addCompany,
  getCompanies,
  updateCompany,
  deleteCompany
} = require("../controller/companyController");

router.post("/", auth, addCompany);
router.get("/", auth, getCompanies);
router.put("/:id", auth, updateCompany);
router.delete("/:id", auth, deleteCompany);

module.exports = router;
