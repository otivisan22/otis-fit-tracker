const path = require("path");

const renderHomePage = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(error.message);
  }
};

const renderExercisePage = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/exercise.html"));
  } catch (error) {
    console.log(error.message);
  }
};

const renderStatsPage = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/stats.html"));
  } catch (error) {}
  console.log(error.message);
};

module.exports = {
  renderHomePage,
  renderStatsPage,
  renderExercisePage,
};
