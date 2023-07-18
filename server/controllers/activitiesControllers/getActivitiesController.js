const { Activity, Country } = require("../../src/db.js");
const { Op } = require("sequelize");

const filterCountries = (activity) => {
  return activity.Countries.map((country) => {
    const { Country_Activity, ...countryData } = country.toJSON();
    return countryData;
  });
};

const getActivitiesController = async (name) => {
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const activities = await Activity.findAll({
    order: [["name", "ASC"]],
    where: condition,
    include: [
      {
        model: Country,
        attributes: ["name"],
      },
    ],
  });

  if (activities.length === 0) {
    throw new Error("No hay coincidencias");
  }

  const filteredActivities = activities.map((activity) => {
    const filteredCountries = filterCountries(activity);
    return {
      ...activity.toJSON(),
      Countries: filteredCountries,
    };
  });

  return filteredActivities;
};

module.exports = { getActivitiesController };
