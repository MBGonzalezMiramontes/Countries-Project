const { Activity, Country } = require("../src/db");
const { Op } = require("sequelize");

//Controllers: se encargan de la lógica y de interactuar con fuentes externas(api o db).
// Acciones entre tablas relacionadas a través del modelo relacional que define nuestra base de datos.

// Este controlador crea una nueva actividad turística, establece las relaciones con los países indicados y retorna la actividad con los países relacionados.
const createActivityController = async (
  name,
  difficulty,
  duration,
  season,
  description,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    description,
  });

  const associatedCountries = await Country.findAll({
    where: {
      name: {
        [Op.or]: countries.map((country) => ({
          [Op.iLike]: country,
        })),
      },
    },
  });

  await newActivity.setCountries(associatedCountries);

  const activity = await Activity.findByPk(newActivity.id, {
    include: {
      model: Country,
      attributes: ["name"],
    },
  });

  return activity;
};

// Este controlador busca actividades en la db según un nombre proporcionado.
const getActivitiesController = async (name) => {
  //Si name tiene un valor, se realiza una búsqueda de coincidencias parciales en el campo name,
  //y si name no tiene un valor, se obtienen todas las actividades sin aplicar ninguna condición de búsqueda.
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const activities = await Activity.findAll({
    order: [["name", "ASC"]],
    where: condition,
    include: {
      model: Country,
      attributes: ["name"],
    },
  });

  if (activities.length === 0) {
    throw new Error("No hay coincidencias con " + name);
  }

  return activities;
};

module.exports = { createActivityController, getActivitiesController };
