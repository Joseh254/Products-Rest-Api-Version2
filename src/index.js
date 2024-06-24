import express from 'express';

const app = express();

// app.use("/products", products)

app.listen(3000, () => {
  console.log("App running on port 3000...");
});