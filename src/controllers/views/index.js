const { workout } = require("../../models/workout");

const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/index.html"));
};

const renderExercisePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
};

const renderStatsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/stats.html"));
};

module.exports = {
  renderHomePage,
  renderStatsPage,
  renderExercisePage,
};
