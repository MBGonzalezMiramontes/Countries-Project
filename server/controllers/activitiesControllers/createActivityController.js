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
