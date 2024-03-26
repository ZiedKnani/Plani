const express = require("express");

const db = require("./models/db");
const userRouter = require("./routes/user");
const port = process.env.PORT;
const dotenv = require("dotenv");
dotenv.config();
const app = express();
db();
//testing
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to backend zone!" });
});

app.listen(port, (er) => {
  if (er) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
app.use(express.json());
app.use(userRouter);
