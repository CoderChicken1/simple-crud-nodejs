const express = require('express')
// Using Node.js `require()`
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route.js");
const app = express()

app.use(express.json()); 
app.use(express.urlencoded({extended: false}))


// routes
app.use("/api/products", productRoute);

app.get('/', (req,res)=>{
  res.send("Hello From Node API serve")
})

mongoose.connect('mongodb+srv://hokha714:eTvHtlkgAMa1rlAz@backenddb.sjitl72.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() =>{ console.log('Connected Mongodb!');
  app.listen(3000, ()=> {
    console.log('Serve is running on port 3000');
  })}
).catch(()=> console.log('Connected Failed!'))