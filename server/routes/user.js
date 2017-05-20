const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

var User = require('../models/user');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.JWT_KEY;

router.post('/signup', function (req, res, next) {
    User.findOne({'username': req.body.username}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user){
            return res.status(401).json({message: "username already in use"});
        }else{
        var newUser = new User ();
            newUser.username = req.body.username;
            newUser.password = newUser.encryptPassword(req.body.password);
        newUser.save(function(err, newUser) {
            if (err) {
                return done(err, false);
            }
            var token = jwt.sign({id: newUser.username}, jwtOptions.secretOrKey, { expiresIn: '24h'});
            res.json({message: "User Created", token: token});
            })
        }
    });
});

router.post('/login', function (req, res, next) {
    User.findOne({'username': req.body.username}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user || !user.validPassword(req.body.password)){
            return res.status(401).json({message: "incorrect username or password"});
        }
        var token = jwt.sign({id: req.body.username}, jwtOptions.secretOrKey, { expiresIn: '24h'});
        res.json({message: "User Logged In", token: token});
    });
});


module.exports = router;