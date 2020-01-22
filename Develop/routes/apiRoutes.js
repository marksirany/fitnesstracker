//got help from jake's code abd tutor session
var db = require("../models");

module.exports = {

    api: function (app) {
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

        // add an exercise to a workout
        app.put("/api/workouts/:id", ({ body }, res) => {
            const workoutId = body.params.id;

            db.Workout.update({ body })
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                });
        });
    }
};