//  const { sumar, restar } = require('./OperacionesEnteros/enteros.js')
//  const { sumarNum, sumarNum } = require('./OperacioneesArreglos')

var ent = require('./OperacionesEnteros/enteros.js');
const arr = require('./OperacionesArreglos/arreglos.js');

const express = require('express');
const app = express();

app.get('/quierosumar', (req,res) => {
    res.end('La suma de 8 y 4 es: '+ ent.sumar(8,4))
})
app.listen(3000, () => {
    console.log("hola")
});