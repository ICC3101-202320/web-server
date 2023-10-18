const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola, cómo estay?');
});

router.get('/:nombre', (req, res) => {
    console.log(req);
    const greet = `Hola ${req.params.nombre}, cómo estay?`
    res.send(greet);
});

module.exports = router