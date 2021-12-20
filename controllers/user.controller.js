const { response, request } = require('express');
const user = require('../models/user');


const User = require('../models/user');



const userGet = async(req = request, res = response) => {
    
    // TODO: USER GET

    const users = await User.find().select('-__v')

    console.log(users);

    res.json(users)

}

const userPost = async(req, res = response) => {
    
    // TODO: USER POST

    const username = req.body.username;    

    const user = new User({username});

    await user.save()


    res.json(user)


}




module.exports = {
    userGet,
    userPost
}