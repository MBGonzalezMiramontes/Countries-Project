const { Country, Activity } = require("../../src/db");
const { Op } = require("sequelize");

const getCountryByIdController = async (id) => {
  if (id) {
    const countryDetail = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name"],
      },
    });
    return countryDetail;
  }
  throw new Error("No hay coincidencias.");
};

module.exports = {
  getCountryByIdController,
};
