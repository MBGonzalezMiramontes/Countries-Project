const { Router } = require("express");

const {
  getCountriesHandler,
  getCountriesDetailsHandler,
} = require("../../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter
  .get("/countries", getCountriesHandler)
  .get("/countries/:id", getCountriesDetailsHandler);

module.exports = countriesRouter;
