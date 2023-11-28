const { Router } = require('express')
const router = Router();
const perritos = [
    { id: "1", name: "dogzilla", edad: 10 },
    { id: "2", name: "alma", edad: 5 },
    { id: "3", name: "coki", edad: 6 },
    { id: "4", name: "uma", edad: 15 },
    { id: "5", name: "oso", edad: 1 },
    { id: "6", name: "tyson", edad: 2 },
    { id: "7", name: "kiara", edad: 2 },
  ];

const midd = (req, res, next ) => {
  req.perrito1 = 'Toby'
  console.log('time: ', Date.now());
  next();
};

const midd2 = (req, res, next ) => {
  req.email = 'toby@gmail.com'
  console.log('midd2');
  next();
};

//configuracion de las routes
router.get('/');
router.post('/');
router.put('/:id');
router.delete('/:id');
  
/*
//este anda bien

router.get('/', midd,  (req, res) => {
  return res.status(200).json({ status: "ok", data: perritos });
});*/
router.get('/', midd, midd2, (req, res) => {
  const perro = {
    nombre: req.perrito1,
    email: req.email
  }
  res.status(200).send(perro);
});

  router.post('/', (req, res) => {
    const perrito = req.body;
    perrito.id = Math.floor(Math.random() * 9000000) + 1000000 + "";
    perritos.push(perrito);
    return res.status(201).send({ status: "ok", data: perrito });
  });

  router.put('/:id', (req, res) => {
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
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    perritos = perritos.filter((item) => item.id !== id);
    return res.status(200).json({ status: "ok", data: undefined });
  });
  

module.exports = router
