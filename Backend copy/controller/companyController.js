const Company = require("../models/Company");

exports.addCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.json(company);
};

exports.getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

exports.updateCompany = async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(company);
};

exports.deleteCompany = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: "Company deleted" });
};
