const { Router } = require("express");

const { createActivitiesHandler, getActivitiesHandler } = require ("../handlers/activitiesHandlers");

const activitiesRouter = Router();



activitiesRouter.post("/activities", createActivitiesHandler);

//Esta ruta recibirá todos los datos necesarios para
//crear una actividad turística y relacionarla con
//los países solicitados.

//Toda la información debe ser recibida por body.

//Debe crear la actividad turística en la base de datos,
//y esta debe estar relacionada con los países indicados
//(al menos uno).

activitiesRouter.get("/activities", getActivitiesHandler);

// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

module.exports = activitiesRouter;
