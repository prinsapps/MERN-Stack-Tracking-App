//this is a route that im createing
const router = require('express').Router();
// mongo model that i created
let User = require('../models/user.model');

//1st route incoming http get request (listing all the users)
router.route('/').get((req, res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

//incoming http post request (listing all the users)
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const newUser = new User({username});

// save method
    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;