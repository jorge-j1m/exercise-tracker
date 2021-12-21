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

const logsGet = async (req = request, res = response)=>{

  const exercises = await Exercise.find({userID: req.params.id});

  const user = await User.findById(req.params.id);


  console.log(exercises);
  console.log(user);

  res.json({
    msg: "endpoint working"
  })

}



module.exports = {
  userGet,
  userPost,
  exercisesPost,
  logsGet
};
