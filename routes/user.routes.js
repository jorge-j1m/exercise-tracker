const { Router } = require('express');

const {
    validarCampos
} = require('../middlewares');


const { userGet,
        userPost} = require('../controllers/user.controller');
const router = Router();


router.get('/', userGet );

router.post('/', userPost );



module.exports = router;