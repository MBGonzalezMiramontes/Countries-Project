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

const getAllCountryNames = async () => {
  try {
    const countries = await Country.findAll({
      attributes: ["name"],
    });

    const countryNames = countries.map((country) => country.name);
    return countryNames;
  } catch (error) {
    console.error("Error al obtener los nombres de los países:", error);
    throw error;
  }
};

module.exports = {
  getCountriesController,
  getAllCountryNames,
};
