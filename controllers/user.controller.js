const { response, request } = require('express');


const User = require('../models/user');



const userGet = async(req = request, res = response) => {

    
    // TODO: USER GET

}

const userPost = async(req, res = response) => {
    
    // TODO: USER POST

    const username = req.body.username;    

    const user = new User({username});

    user.save()


    res.json({
        user
    })


}




module.exports = {
    userGet,
    userPost
}