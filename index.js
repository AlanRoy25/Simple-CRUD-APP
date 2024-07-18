const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // Ensure this path is correct
const app = express();
const productRoute = require('./routes/product.route.js')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // this is for entering the data in the form type in the get request.


// routes
app.use('/api/products', productRoute)

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});


mongoose.connect("mongodb+srv://admin:admin@backenddb.93bwxbb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB", {

})
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
  });
