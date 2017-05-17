//get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./server/models/user');

require('dotenv').config();  //comment for production

mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST);
mongoose.Promise = global.Promise;

const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.JWT_KEY;

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    User.findOne({'_id': jwt_payload.id}, function(err, user){
        if (user){
        next(null, user);
        } else {
            next(null, false);
        }
    });
})

passport.use(strategy);

//get our API routes
const apiRoutes = require('./server/routes/api');
const userRoutes = require('./server/routes/user');

const app = express();
app.use(passport.initialize());

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set our routes
app.use('/user', userRoutes);
app.use('/api', apiRoutes);

app.post("/login", function(req, res) {
    if(req.body.username && req.body.password) {
        var name = req.body.username;
        var password = req.body.password;
    }
    User.findOne({'username': name}, function(err, user){
        if (!user){
            res.status(401).json({message:"no such user found"});
        } 
        if(user.password === req.body.password) {
            var payload = {id: user._id};
            var token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.json({message: "ok", token: token});
        }
        else {
            res.status(401).json({message:"passwords did not match"});
        }
    });
})

app.get("/protected", passport.authenticate('jwt', {session: false}), function(req, res){
    res.json("Success beeoch!!");
})

//catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

// create HTTP server
const server = http.createServer(app);

//listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost: ${port}`));