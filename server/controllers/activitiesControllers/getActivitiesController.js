const { Activity, Country } = require("../../src/db.js");
const { Op } = require("sequelize");

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
    throw new Error("No hay coincidencias con " + name);
  }

  return activities;
};

module.exports = { getActivitiesController };
