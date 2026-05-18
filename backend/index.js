require("dotenv").config();
const connectToMongo = require("./Database/db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({ origin: process.env.FRONTEND_API_LINK }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("College Management System API");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
