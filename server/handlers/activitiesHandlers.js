const {
  createActivityController,
  getActivitiesController,
} = require("../controllers/activitiesControllers");

//Handlers: desestructuran la data recibida por query, params o body.
//ManejaN errores (con try y catch)
//Utilizan los controllers y envía la respuesta al cliente.

const createActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, description, countries } =
      req.body;
    const response = await createActivityController(
      name,
      difficulty,
      duration,
      season,
      description,
      countries
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getActivitiesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getActivitiesController(name);
      return res.status(200).json(response);
    }
    const response = await getActivitiesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createActivityHandler, getActivitiesHandler };
