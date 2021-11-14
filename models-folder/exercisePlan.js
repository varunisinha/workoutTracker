const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creating models for input data
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name : {
        type : String,
        enum: ["resistance", "cardio"],
        required : "Enter Name for Workout"
      },
      type : {
        type: String,
        trim : true,
        required : "Enter Type of workout"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Enter Time for Workout"
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});


// Create mongoose model 'workout' and apply workout schema to that model
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export workout model
module.exports = Workout;