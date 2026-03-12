const Product = require("./productModel");

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product deleted" });
};

exports.searchProduct = async (req, res) => {
  const products = await Product.find({
    productName: { $regex: req.query.name, $options: "i" }
  });
  res.json(products);
};

exports.filterCategory = async (req, res) => {
  const products = await Product.find({
    category: req.query.cat
  });
  res.json(products);
};