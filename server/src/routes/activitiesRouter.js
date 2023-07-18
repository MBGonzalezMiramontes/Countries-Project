const { Router } = require("express");

const {
  createActivityHandler,
  getActivitiesHandler,
} = require("../../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter
  .post("/activities", createActivityHandler)
  .get("/activities", getActivitiesHandler);

module.exports = activitiesRouter;
