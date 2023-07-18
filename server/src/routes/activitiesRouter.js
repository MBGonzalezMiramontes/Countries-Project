const { Router } = require("express");

const {
  getActivitiesHandler,
} = require("../../handlers/activitiesHandlers/getActivitiesHandler.js");

const {
  createActivityHandler,
} = require("../../handlers/activitiesHandlers/createActivitiesHandler.js");

const activitiesRouter = Router();

activitiesRouter
  .post("/activities", createActivityHandler)
  .get("/activities", getActivitiesHandler);

module.exports = activitiesRouter;
