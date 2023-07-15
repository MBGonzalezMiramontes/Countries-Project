const { Router } = require("express");

const {
  getAllCountriesHandler,
  getCountriesDetailsHandler,
} = require("../../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get('/countries', getAllCountriesHandler);
countriesRouter.get('/countries/:id', getCountriesDetailsHandler);


module.exports = countriesRouter;
