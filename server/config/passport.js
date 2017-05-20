const passport = require('passport');
const User = require('../models/user');
const passportJWT = require('passport-jwt');

const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.JWT_KEY;


//strategy for verifying protected endpoints
passport.use('jwt-strategy', new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    User.findOne({'username': jwt_payload.id}, function(err, user){
        if (err) {
            return next(err, false);
        }
        if (user){
        next(null, user);
        } else {
            next(null, false);
        }
    });
}));


