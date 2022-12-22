const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company } = req.company;
  const query = {};
  if (company) query.company = company;
  const products = await Product.find(query);
  res.status(200).json({ products });
};

const getAllProductsTesting = async (req, res) => {
  res
    .status(200)
    .json({ msg: "getAllProductsTesting route working properly." });
};

module.exports = { getAllProducts, getAllProductsTesting };
