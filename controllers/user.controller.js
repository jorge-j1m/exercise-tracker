const { response, request } = require("express");
const User = require("../models/user");
const Exercise = require("../models/exercise");

const userGet = async (req = request, res = response) => {
  const users = await User.find().select("-__v");

  console.log(users);

  res.json(users);
};

const userPost = async (req, res = response) => {
  const username = req.body.username;

  const user = new User({ username });

  await user.save();

  res.json(user);
};

const exercisesPost = async (req = request, res = response) => {
  let { description, duration, date } = req.body;

  if (date) {
    date = new Date(date);
  } else {
    date = new Date();
  }

  const user = await User.findById(req.params.id);

  const exercise = new Exercise({
    userID: req.params.id,
    description,
    duration,
    date,
  });

  await exercise.save();

  res.json({
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date.toDateString(),
    _id: user._id,
  });
};

const logsGet = async (req = request, res = response) => {
  let { from = "1970-01-01", to = Date(), limit } = req.query;

  from = new Date(from);
  to = new Date(to);

  let exercises = await(await Exercise.find({ userID: req.params.id })).filter((element) => {
      fecha = new Date(element.date)
      console.log(`from: ${from} ; to: ${to} ; fecha: ${fecha}`);
      if (fecha > from && fecha < to) {
        return element;
      }
    }
  );
  const count = exercises.length;
  exercises = exercises.slice(parseInt(limit));

  const user = await User.findById(req.params.id);

  const log = exercises.map((exercise) => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.toDateString(),
    };
  });

  res.json({
    username: user.username,
    count,
    _id: user._id,
    log,
  });
};

module.exports = {
  userGet,
  userPost,
  exercisesPost,
  logsGet,
};
