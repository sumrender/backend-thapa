const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all products route working properly." });
};

const getAllProductsTesting = async (req, res) => {
  res
    .status(200)
    .json({ msg: "getAllProductsTesting route working properly." });
};

module.exports = { getAllProducts, getAllProductsTesting };
