//deckare constants
const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const Workout = require("./Develop/models/workout");

const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

const db = require("./Develop/models");

//get last workout
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});