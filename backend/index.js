require("dotenv").config();
const connectToMongo = require("./Database/db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({ origin: process.env.FRONTEND_API_LINK }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello 👋 I am Working Fine 🚀");
});

app.use("/api/student/auth", require("./routes/Student Api/credential.route"));
app.use("/api/faculty/auth", require("./routes/Faculty Api/credential.route"));
app.use("/api/admin/auth", require("./routes/Admin Api/credential.route"));

app.listen(port, () => {
  console.log(`Server Listening On http://localhost:${port}`);
});
