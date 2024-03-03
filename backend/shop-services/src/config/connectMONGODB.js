const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/shopServices"
    );
    console.log("DB connect is successfully");

    // Event listener for errors during the connection
    conn.connection.on("error", (err) => {
      console.error("DB connection error:", err);
    });

    // Event listener for when the connection is closed
    conn.connection.on("disconnected", () => {
      console.log("DB connection disconnected");
    });
  } catch (error) {
    console.log("DB connect is failed", error);
  }
};

module.exports = connectdb;
