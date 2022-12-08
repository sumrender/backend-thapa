const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");

const PORT = process.env.PORT || 5000;
const product_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("server working properly");
});

// middleware or to set router
app.use("/api/products", product_routes);

const start = async () => {
  try {
    const db = await connectDB();
    app.listen(PORT, () => {
      console.log(
        `server listening on port ${PORT} and db instance is ${db.connection.host}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
start();
