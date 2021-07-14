const { Workout } = require("../../models");

const { Router } = require("express");

const {
  getLastWorkout,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getLastWorkout);
router.post("/workout", createWorkout);
router.put("/workout/:id", updateWorkout);
router.get("/range", getWorkoutRange);

module.exports = {
  getLastWorkout,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
};
