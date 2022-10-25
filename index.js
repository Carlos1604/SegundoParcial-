const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const {router} = require('./routes');

// Creating express app
const app = express();
const apiPort =   4092;

// Setting up express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

// Tell app to listen for new calls and sleep when none are arriving
app.listen(apiPort, () => {
    console.log(`Servidor iniciado en el puerto ${apiPort} hehehe`);
});