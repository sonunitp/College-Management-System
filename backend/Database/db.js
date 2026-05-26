require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const fail = (message) => {
  if (process.env.VERCEL) {
    throw new Error(message);
  }
  console.error(message);
  process.exit(1);
};

const connectToMongo = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!mongoURI) {
    fail("MONGODB_URI is missing. Add it to backend/.env");
  }

  if (mongoURI.includes("YOUR_PASSWORD") || mongoURI.includes("<password>")) {
    fail(
      "MONGODB_URI still has a placeholder password. Replace it in backend/.env"
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoURI)
      .then((conn) => {
        console.log("✅ Connected to MongoDB Successfully");
        cached.conn = conn;
        return conn;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("❌ MongoDB connection failed:", error.message);
        throw error;
      });
  }

  return cached.promise;
};

module.exports = connectToMongo;
