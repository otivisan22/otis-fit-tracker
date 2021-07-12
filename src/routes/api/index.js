const { Router } = require("express");

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/", getWorkouts);

router.post("/", createWorkout);

router.put("/:id", updateWorkout);

router.get("/", getWorkoutRange);

module.exports = router;
