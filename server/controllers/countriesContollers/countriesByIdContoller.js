const { Country, Activity } = require("../../src/db");
const { Op } = require("sequelize");

const filterActivities = (country) => {
  return country.Activities.map((activity) => {
    const { Country_Activity, ...activityData } = activity.toJSON();
    return activityData;
  });
};

const getCountryByIdController = async (id) => {
  if (id) {
    const countryDetail = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name"],
      },
    });

    if (!countryDetail) {
      throw new Error("No hay coincidencias.");
    }

    const filteredActivities = filterActivities(countryDetail);

    return {
      ...countryDetail.toJSON(),
      Activities: filteredActivities,
    };
  }

  throw new Error("No hay coincidencias.");
};

module.exports = {
  getCountryByIdController,
};
