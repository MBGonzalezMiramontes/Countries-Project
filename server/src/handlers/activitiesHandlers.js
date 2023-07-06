const createActivitiesHandler = (req, res) => {
  const {name, difficulty, duration, season} = req.body
    res.status(200).send(`ok ${name}, ${difficulty}, ${duration}, ${season}`);
  };
  
  const getActivitiesHandler = (req, res) => {
    res.status(200).send("get activities ok");
  };

  module.exports ={
    createActivitiesHandler,
    getActivitiesHandler
  };