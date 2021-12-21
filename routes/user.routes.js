const { Router } = require('express');

const {
    validarCampos
} = require('../middlewares');


const { userGet,
        userPost,
        exercisesPost
} = require('../controllers/user.controller');
const router = Router();


router.get('/', userGet );

router.post('/', userPost );

router.post('/:id/exercises', exercisesPost);


module.exports = router;