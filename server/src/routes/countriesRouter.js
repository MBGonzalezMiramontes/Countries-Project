const { Router } = require("express");

const {
  getCountriesDetailsHandler,
} = require("../../handlers/countriesHandlers/countriesDetailsHanlder");

const {
  getCountriesHandler,
} = require("../../handlers/countriesHandlers/countriesHandler");

const countriesRouter = Router();

countriesRouter
  .get("/countries", getCountriesHandler)
  .get("/countries/:id", getCountriesDetailsHandler);

module.exports = countriesRouter;
