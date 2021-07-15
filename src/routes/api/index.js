const { Router } = require("express");

const {
  getLastWorkout,
  createWorkout,
  updateWorkout,
  getWorkoutRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getLastWorkout);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("workouts/range", getWorkoutRange);

module.exports = router;
