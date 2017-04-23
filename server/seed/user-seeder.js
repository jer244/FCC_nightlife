var User = require('../models/user');

require('dotenv').config();  

var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds157040.mlab.com:57040/fcc-nightlife');
mongoose.Promise = global.Promise;

var users = [
      new User({
        username: 'one',
        password: 'oneiam'
      }),
      new User({
        username: 'two',
        password: 'twoiam'
      }),
      new User({
        username: 'three',
        password: 'threeiam'
      }),
      new User({
        username: 'four',
        password: 'fouriam'
      })
];

var done = 0;
for(var i =0; i < users.length; i++){
  users[i].save(function(err, result){
    done++;
    if(done === users.length){
      mongoose.disconnect();
    };
  });
};