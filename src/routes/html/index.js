const { Router } = require("express");

const {
  renderHomePage,
  renderStatsPage,
  renderExercisePage,
} = require("../../controllers/views");

const router = Router();

router.get("/stats", renderStatsPage);

router.get("/exercise", renderExercisePage);

router.get("/", renderHomePage);

module.exports = router;
