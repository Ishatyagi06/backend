const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./db");
const productRoutes = require("./productRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", productRoutes);

app.get("/", (req, res) => {
  res.send("Store Inventory API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});