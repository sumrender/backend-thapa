const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// "mongodb://127.0.0.1:27017/backendThapa";
// "mongodb://localhost:27017/backendThapa"
// uri with localhost does not work

function connectDB() {
  return mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = connectDB;
