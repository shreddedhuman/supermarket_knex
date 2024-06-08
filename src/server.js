const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🌴`);
});
