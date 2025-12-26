const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Student = require("./models/Student");
const bcrypt = require("bcryptjs");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors());
app.use(express.json());

const createAdmin = async () => {
  try {
    const adminExists = await Student.findOne({ role: "admin" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      await Student.create({
        name: "Placement Admin",
        email: "admin@gmail.com",
        password: hashedPassword,
        role: "admin"
      });

      console.log("✅ Admin user created");
    } else {
      console.log("ℹ️ Admin already exists");
    }
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
  }
};

createAdmin();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));


app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
