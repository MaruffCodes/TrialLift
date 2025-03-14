import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import vendorRegisterRoutes from "./routes/vendorRegisterRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js"; // ✅ Ensure this is correctly imported
import adminControlsRoutes from "./routes/adminControls.js";
import Admin from "./models/Admin.js";
import bcrypt from "bcryptjs";

dotenv.config();
connectDB();

// Function to create admin if it doesn't exist
const createAdminIfNotExists = async () => {
  try {
    const adminExists = await Admin.findOne({ email: "admin@gmail.com" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await Admin.create({ email: "admin@gmail.com", password: hashedPassword });
      console.log("✅ Admin account created: admin@gmail.com / admin123");
    } else {
      console.log("ℹ️ Admin already exists, skipping creation.");
    }
  } catch (error) {
    console.error("❌ Error ensuring admin exists:", error);
  }
};

// Call the function to create the admin user
createAdminIfNotExists();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/vendor_registers", vendorRegisterRoutes);
app.use("/api/admin", adminRoutes); // ✅ Ensure this matches your frontend
app.use("/api/adminControls", adminControlsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
