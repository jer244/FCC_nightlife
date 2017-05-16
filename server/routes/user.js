var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(5), null)
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

module.exports = router;