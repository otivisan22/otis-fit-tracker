const { Workout } = require("../../models");

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

router.get("/workouts", getWorkouts);
router.post("/workout", createWorkout);
router.put("/workout/:id", updateWorkout);
router.get("/range", getWorkoutRange);

module.exports = {
  getWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
};
