const Workout = require("../../models");
// const getWorkouts = async (req, res) => {
//   try {
//     workout
//       .aggregate([
//         {
//           $addFields: {
//             totalDuration: { $sum: "$exercises.duration" },
//           },
//         },
//       ])
//       .then((workouts) => {
//         return res.json(workouts);
//       });
//   } catch (error) {
//     res.json();
//   }
// };

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    console.log(workouts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};
const createWorkout = async (req, res) => {
  try {
    const workout = Workout.create({});
    return res.json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to create a workout" });
  }
};
const updateWorkout = async (req, res) => {
  try {
  } catch (error) {}
};
const getWorkoutRange = async (req, res) => {
  try {
  } catch (error) {}
};
