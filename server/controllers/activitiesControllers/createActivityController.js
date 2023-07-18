const { Activity, Country } = require("../../src/db.js");
const { Op } = require("sequelize");

const createActivityController = async (
  name,
  difficulty,
  duration,
  season,
  description,
  countries
) => {
  // Crea una nueva instancia de actividad turística con los valores proporcionados en los parámetros.
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    description,
  });

  // Busca los países que coinciden con los nombres proporcionados en el arreglo "countries".
  const associatedCountries = await Country.findAll({
    where: {
      name: {
        [Op.or]: countries.map((country) => ({
          [Op.iLike]: country,
        })),
      },
    },
  });

  // Obtiene la actividad recién creada con los países relacionados incluidos.
  await newActivity.setCountries(associatedCountries);

  const activity = await Activity.findByPk(newActivity.id, {
    include: {
      model: Country,
      attributes: ["name"],
    },
  });

  const filteredCountries = activity.Countries.map((country) => {
    const { Country_Activity, ...countryData } = country.toJSON();
    return countryData;
  });
  return {
    ...activity.toJSON(),
    Countries: filteredCountries,
  };
};

module.exports = { createActivityController };
