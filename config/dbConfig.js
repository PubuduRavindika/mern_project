const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connected to database");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = connection;
