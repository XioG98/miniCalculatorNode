//  const { sumar, restar } = require('./OperacionesEnteros/enteros.js')
//  const { sumarNum, sumarNum } = require('./OperacioneesArreglos')

var ent = require('./OperacionesEnteros/enteros.js');
const arr = require('./OperacionesArreglos/arreglos.js');
const express = require('express');

const inventario = require('./OperacionesObjetos/inventario.js')
const app = express();

app.get('/quierosumar', (req,res) => {
    res.end('La suma de 8 y 4 es: '+ ent.sumar(8,4))
})
app.get('/quierorestar', (req,res) => {
    res.end('La resta de 10 y 4 es: '+ ent.restar(10,4))
})
app.get('/encontrar', (req,res) => {
    res.end('El numero 18 se encuentra en la posicion '+ arr.buscarNum(18) + ' del array')
})
app.get('/acumular', (req,res) => {
    res.end('La suma de todos los elementos del array es: '+ arr.sumarNum())
})

app.get('/inventario', (req,res) => {
    res.end('producto: '+ inventario.cargarDatos())
})

app.listen(3000, () => {
    console.log("hola")
});