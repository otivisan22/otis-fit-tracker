const workout = require("../../models/Workout");

const getWorkouts = async (req, res) => {
  try {
    workout
      .aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ])
      .then((workouts) => {
        return res.json(workouts);
      });
  } catch (error) {
    res.json();
  }
};
