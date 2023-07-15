const { Activity } = require("../src/db");

// Este controlador crea la actividad turística en la base de datos.
const createActivityController = async (name, difficulty, duration, season) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  return newActivity;
};

//Este controlador se encarga de obtener todas las actividades turísticas de la base de datos.
const getAllActivitiesController = async () => {
  const allActivities = await Activity.findAll();
  return allActivities;
};

module.exports = { createActivityController, getAllActivitiesController };
