const {
  createActivityController,
} = require("../../controllers/activitiesControllers/createActivityController");

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

module.exports = { createActivityHandler };
