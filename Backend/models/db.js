const dotenv = require("dotenv");
dotenv.config();
const url = process.env.URL;
const mongoose = require("mongoose");
const db = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas successfully.");
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed:", error);
  }
};
module.exports = db;
