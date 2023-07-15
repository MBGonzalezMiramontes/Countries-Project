const { Country, Activity } = require("../src/db");
const { Op } = require("sequelize");

// Este controlador se encarga de obtener todos los países con sus respectivas actividades.
const getCountriesController = async (name) => {
  if (name) {
    const countryByName = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: Activity,
    });
    return countryByName;
  }
  const allCountries = await Country.findAll();
  return allCountries;
};

//Este controlador se encarga de obtener los detalles de un país específico identificado por su ID, junto con las actividades asociadas.
const getCountryByIdController = async (id) => {
  if (id) {
    const countryDetail = await Country.findByPk(id, { include: Activity });
    return countryDetail;
  }
};

//Este controlador se encarga de obtener todos los países que coinciden con un nombre, junto con las actividades asociadas.
// Op.iLike se utiliza para realizar una búsqueda sin tener en cuenta mayúsculas y minúsculas.

//const getCountriesByNameController = async (name) => {
// if (name) {
// const countries = await Country.findOne({
// where: { name: { [Op.iLike]: `%${name}%` } },
//include: Activity,
//});
//return countries;
//}
//};

module.exports = {
  getCountriesController,
  getCountryByIdController,
};
