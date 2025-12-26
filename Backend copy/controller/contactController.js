const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  await Contact.create({ name, email, message });

  res.json({ message: "Contact submitted successfully" });
};

exports.getContacts = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
