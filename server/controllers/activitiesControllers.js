const { Activity, Country } = require("../src/db");
const { Op } = require("sequelize");

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

  // Se recorre el arreglo countries para buscar los países correspondientes en la base de datos utilizando el nombre de cada país.
  for (let i = 0; i < countries.length; i++) {
    const findCountry = await Country.findAll({
      where: { name: countries[i] },
    });
    //Para cada país encontrado, se establece la relación con la nueva actividad utilizando el método addCountries.
    await newActivity.addCountries(findCountry);
  }
  // Se realiza una consulta adicional para obtener la actividad turística recién creada, incluyendo los nombres de los países relacionados.
  const activity = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return activity;
};

const getActivitiesController = async (name) => {
  //Si name tiene un valor, se realiza una búsqueda de coincidencias parciales en el campo name,
  //y si name no tiene un valor, se obtienen todas las actividades sin aplicar ninguna condición de búsqueda.
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const activities = await Activity.findAll({
    where: condition,
    include: Country,
  });

  if (activities.length === 0) {
    throw new Error("No hay coincidencias.");
  }

  return activities;
};
//{
//   //Se incluye el modelo de Country en la consulta y se  especifica que no se incluyan atributos adicionales de la relación entre actividades y países
//   // para obtener los nombres de los países relacionados.
//   include: {
//     model: Country,
//     attributes: ["name"],
//     through: {
//       attributes: [],
//     },
//   },
// });

module.exports = { createActivityController, getActivitiesController };
