import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
