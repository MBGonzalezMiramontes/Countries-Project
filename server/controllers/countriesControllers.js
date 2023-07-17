const { Country, Activity } = require("../src/db");
const { Op } = require("sequelize");

// Este controlador permite obtener países de la base de datos según un nombre proporcionado o todos los países si no se proporciona un nombre.
const getCountriesController = async (name) => {
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const countries = await Country.findAll({
    where: condition,
    include: Activity,
  });

  if (countries.length === 0) {
    throw new Error("No hay coincidencias.");
  }
  return countries;
};

//Este controlador se encarga de obtener los detalles de un país específico identificado por su ID, junto con las actividades asociadas.
const getCountryByIdController = async (id) => {
  if (id) {
    const countryDetail = await Country.findByPk(id, { include: Activity });
    return countryDetail;
  }
};

module.exports = {
  getCountriesController,
  getCountryByIdController,
};
