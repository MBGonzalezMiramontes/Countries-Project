const { Router } = require("express");

const { createActivityHandler, getAllActivitiesHandler } = require ("../../handlers/activitiesHandlers");

const activitiesRouter = Router();



activitiesRouter.post("/activities", createActivityHandler);

activitiesRouter.get("/activities", getAllActivitiesHandler);


module.exports = activitiesRouter;
