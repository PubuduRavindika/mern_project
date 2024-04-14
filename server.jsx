require("dotenv").config();
const express = require("express");
const portfolioRoute = require("./routes/portfolioRoute");
const connection = require("./config/dbConfig");
const app = express();
connection.on("error", () => {
  console.log("Error connecting to database");
});

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
