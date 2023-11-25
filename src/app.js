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
const userRouter = require('./routes/perritos.router.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/perritos', userRouter);

let perritos = [
  { id: "1", name: "dogzilla", edad: 10 },
  { id: "2", name: "alma", edad: 5 },
  { id: "3", name: "coki", edad: 6 },
  { id: "4", name: "uma", edad: 15 },
  { id: "5", name: "oso", edad: 1 },
  { id: "6", name: "tyson", edad: 2 },
  { id: "7", name: "kiara", edad: 2 },
];

app.get("/api/perritos", (req, res) => {
  return res.status(200).json({ status: "ok", data: perritos });
});

app.put("/api/perritos/:id", (req, res) => {
  return res.status(200).json({ status: "ok", data: [] });
});

app.put("/api/perritos/:id", (req, res) => {
  const id = req.params.id;
  const nuevosDatosPerrito = req.body;

  const i = perritos.findIndex((item) => item.id === id);
  if (i === -1) {
    return res.status(404).json({ status: "fail", data: {} });
  } else {
    perritos[i] = { ...nuevosDatosPerrito, id: perritos[i].id };
    return res.status(200).json({ status: "ok", data: perritos[i] });
  }
});

app.delete("/api/perritos/:id", (req, res) => {
  const id = req.params.id;
  perritos = perritos.filter((item) => item.id !== id);
  return res.status(200).json({ status: "ok", data: undefined });
});

app.post("/api/perritos", (req, res) => {
  const perrito = req.body;
  perrito.id = Math.floor(Math.random() * 9000000) + 1000000 + "";
  perritos.push(perrito);
  return res.status(201).send({ status: "ok", data: perrito });
});

app.get('/api/products', (req, res) => {
  res.send('get productos')
});

app.get('/api/products', (req, res) => {
  res.send('get productos')
});

app.get('/api/products', (req, res) => {
  res.send('get productos')
});

app.get('/api/products', (req, res) => {
  res.send('get productos')
});

app.listen(8080, () => {
  console.log(`Example app listening on port http://localhost:8080`);
});
