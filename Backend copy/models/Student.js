const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    department: {
        type: String,        
        required: false
    },

    cgpa: {
        type: Number,
        default: null
    },

    tenthPercent: {
        type: Number,
        default: null
    },

    twelfthPercent: {
        type: Number,
        default: null
    },

    backlogs: {
        type: Number,
        default: 0
    },

    skills: {
        type: [String],        
        default: []
    },

    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    }
}, {
    timestamps: true    
},
{ versionKey: false }
);

module.exports = mongoose.model("Student", studentSchema);
