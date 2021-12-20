const { response, request } = require('express');


const User = require('../models/user');



const userGet = async(req = request, res = response) => {
    
    // TODO: USER GET

    const users = await User.find()

    console.log(users);

    res.json({
        msg: "revisa la consola"
    })

}

const userPost = async(req, res = response) => {
    
    // TODO: USER POST

    const username = req.body.username;    

    const user = new User({username});

    await user.save()


    res.json({
        user
    })


}




module.exports = {
    userGet,
    userPost
}