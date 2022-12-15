require("dotenv").config();
const connectDB = require("./db/connectDB");
const Product = require("./models/product");

const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDB();
    await Product.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
