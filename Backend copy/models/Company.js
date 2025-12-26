const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
    name: String,
    role: String,
    ctc: String,
    criteria: {
        minCGPA: Number,
        min10: Number,
        min12: Number,
        maxBacklogs: Number
    },
    driveDate: Date
})

module.exports = mongoose.model("Company",companySchema);
