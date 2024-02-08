const express = require("express");
const axios = require("axios");

const PORT = 3000;
const app = express();
//      URL       REQ,RES
app.get("/sumar", async (req, res) => {
  const respuestaA = parseInt(req.query.a);
  const respuestaB = parseInt(req.query.b);

  res.json(respuestaA + respuestaB);
});

app.get("/poke", async (req, res) => {
  const dato = req.query.id;
  try {
    const respuesta = axios.get("https://pokeapi.co/v2/pokemon/" + dato);
    res.json(respuesta);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Escuchando en el puerto " + PORT);
});

//REQUEST RESPONSE
//localhost:3000/sumar?a=10&b=20
