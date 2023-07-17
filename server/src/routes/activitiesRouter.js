const { Router } = require("express");

const {
  createActivityHandler,
  getActivitiesHandler,
} = require("../../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.post("/activities", createActivityHandler);
activitiesRouter.get("/activities", getActivitiesHandler);

module.exports = activitiesRouter;
