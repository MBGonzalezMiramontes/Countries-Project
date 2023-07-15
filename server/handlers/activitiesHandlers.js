const {
  createActivityController,
  getAllActivitiesController,
} = require("../controllers/activitiesControllers");

const createActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const response = await createActivityController(
      name,
      difficulty,
      duration,
      season
    );

    if (response) {
      if (countries && Array.isArray(countries)) {
        await response.setCountries(countries);
      }

      return res.status(201).json({ success: true, response });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error al crear actividad" });
  }
};

const getAllActivitiesHandler = async (req, res) => {
  try {
    const activities = await getAllActivitiesController();
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({ error: 'Error Interno del Servidor' });
  }
};

module.exports = { createActivityHandler, getAllActivitiesHandler };
