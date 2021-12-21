const { Router } = require("express");

const { validarCampos } = require("../middlewares");

const {
  userGet,
  userPost,
  exercisesPost,
  logsGet,
} = require("../controllers/user.controller");
const router = Router();

router.get("/", userGet);

router.post("/", userPost);

router.post("/:id/exercises", exercisesPost);

router.get("/:id/logs", logsGet);

module.exports = router;
