const Workout = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const lastWorkout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);

    return res.json(lastWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workout" });
  }
};
const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({});
    return res.json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to create workout" });
  }
};
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = req.body;
    const updatedWorkout = Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: exercise } },
      { new: true }
    );
    return res.json(updatedWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update a workout" });
  }
};
const getWorkoutRange = async (req, res) => {
  try {
    const lastWorkout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    return res.json(lastWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get range workout" });
  }
};

module.exports = {
  getAllWorkouts,
  updateWorkout,
  createWorkout,
  getWorkoutRange,
};
