const { Country, Activity } = require("../../src/db");
const { Op } = require("sequelize");

const getCountriesController = async (name) => {
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const countries = await Country.findAll({
    order: [["name", "ASC"]],
    where: condition,
    include: {
      model: Activity,
      attributes: ["name"],
    },
    attributes: { exclude: ["Country_Activity"] },
  });

  if (countries.length === 0) {
    throw new Error("No hay coincidencias.");
  }
  return countries;
};

module.exports = {
  getCountriesController,
};
