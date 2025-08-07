import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});


app.get("/api/messages", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/favicon.ico", (req, res) => res.status(204).end());



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// ============ DB CONNECTION + SERVER START ============

const startServer = async () => {
  try {
    await connectDB(); // ⏳ Wait for DB connection
    if (process.env.NODE_ENV === "development") {
      server.listen(PORT, () => {
        console.log("✅ Server running on PORT: " + PORT);
      });
    }
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
};

startServer();


// ✅ Vercel expects a default export of the app
export default app;