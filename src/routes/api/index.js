const { Workout } = require("../../models");

const { Router } = require("express");

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getAllWorkouts);
router.post("/workout", createWorkout);
router.put("/workout/:id", updateWorkout);
router.get("/range", getWorkoutRange);

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
};
