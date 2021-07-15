const { Router } = require("express");

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getAllWorkouts);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts/range", getWorkoutRange);

module.exports = router;
