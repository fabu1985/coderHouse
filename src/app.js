/*const express = require('express')
const ProductManager = require('./productManager');
const app = express()

app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
    const limit = req.query.limit;
    const products = await productManager.getProducts();
    const limitedProductsQuantity = await productManager.getPortionOfProducts(limit);
    if (!limit){
        return res.json(products);
    }else{
        return res.json(limitedProductsQuantity);
    }
});

app.get('/products/:pid', async (req, res) => {
  const pid = req.params.pid;
  const filteredProduct = await productManager.getProductById(pid);
  if(filteredProduct){
    res.json(filteredProduct);
  }
  else{
    res.status(404).send("Product not exist");
  }
});


app.listen(8080, () => {
  console.log(`App listening on port 8080`);
});
*/

const express = require("express");
const userRouter = require('./routes/perritos.router.js');
const { uploader } = require("./helpers/uploader.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
/*app.use((req, res, next ) => {
  console.log('time: ', Date.now());
  next
});*/

app.post('/single', uploader.single('myFile'), (req, res) => {
  res.send('archivo subido')
});
//app.use('/static', express.static(__dirname + '/public'));
app.use('/api/perritos', userRouter);

app.use((err, req, res, next ) => {
  console.log(err.stack);
  res.status(500).send('error del server');
});

app.listen(8080, () => {
  console.log(`Listening on port http://localhost:8080`);
});
