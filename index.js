const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // Ensure this path is correct
const app = express();
const productRoute = require('./routes/product.route.js')

//middlewares
app.use(express.json()); // without this it will give as undefined when get request is done
app.use(express.urlencoded({ extended: false })) // this is for entering the data in the form type in the get request. //in form format


// routes
app.use('/api/products', productRoute)

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});

// this is how uh will connect to the mongodb
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
