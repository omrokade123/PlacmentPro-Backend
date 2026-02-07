import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if(isConnected){
    console.log("🔁 MongoDB already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
