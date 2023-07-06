const { Router } = require("express");
const countriesRouter = require("./countriesRouter.js");
const activitiesRouter = require("./activitiesRouter.js");

const router = Router();

router.use(countriesRouter);

router.use(activitiesRouter);

module.exports = router;
