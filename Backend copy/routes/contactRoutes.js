const router = require("express").Router();
const { submitContact, getContacts } = require("../controller/contactController");
const auth = require("../middleware/authMiddleware");

// Public – submit contact form
router.post("/", submitContact);

// Admin – view all messages
router.get("/", auth, getContacts);

module.exports = router;
