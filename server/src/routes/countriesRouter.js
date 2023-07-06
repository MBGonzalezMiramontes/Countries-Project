const { Router } = require("express");

const countriesRouter = Router();

const getAllCountriesHandler = (req, res) => {
  res.status(200).send("countries ok");
};

const getCountriesDetailsHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`pais ${id}`);
  };

countriesRouter.get("/countries", getAllCountriesHandler);
// deberá Obtener un arreglo de objetos,
// donde cada objeto es un país con toda
// su información.

countriesRouter.get("/countries/:id", getCountriesDetailsHandler);
// Esta ruta obtiene el detalle de un país
//específico. Es decir que devuelve un objeto
//con la información pedida en el detalle de un país.

//El país es recibido por parámetro
//(ID de tres letras del país).

//Tiene que incluir los datos
//de las actividades turísticas
//asociadas a este país.

// countriesRouter.get("/countries/name?", (req, res) => {
//  res.status(200).send("countries ok");
//});

// Esta ruta debe obtener todos aquellos países que coinciden
//con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).

// Debe poder buscarlo independientemente de mayúsculas o minúsculas.

//Si no existe el país, debe mostrar un mensaje adecuado.

module.exports = countriesRouter;
