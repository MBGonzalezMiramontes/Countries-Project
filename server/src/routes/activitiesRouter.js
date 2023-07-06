const { Router } = require("express");

const activitiesRouter = Router();

activitiesRouter.post("/activities", (req, res) => {
    res.status(200).send("activities ok");
  });
  
  //Esta ruta recibirá todos los datos necesarios para
  //crear una actividad turística y relacionarla con
  //los países solicitados.
  
  //Toda la información debe ser recibida por body.
  
  //Debe crear la actividad turística en la base de datos,
  //y esta debe estar relacionada con los países indicados
  //(al menos uno).
  
  activitiesRouter.get("/activities", (req, res) => {
      res.status(200).send("get activities ok");
    });

    // Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
  

module.exports = activitiesRouter;