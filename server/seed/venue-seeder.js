var Venue = require('../models/venue');

require('dotenv').config();  

var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds157040.mlab.com:57040/fcc-nightlife');
mongoose.Promise = global.Promise;

var venues = [
      new Venue({
        venueId: 'max-burger-longmeadow',
        users: ['user1', 'user2']
      }),
      new Venue({
        venueId: 'nathan-bills-bar-and-restaurant-springfield',
        users: ['user1', 'yomama']
      }),
      new Venue({
        venueId: 'plan-b-springfield-springfield-2',
        users: ['user2']
      }),
      new Venue({
        venueId: 'ume-asian-bistro-longmeadow',
        users: []
      })
];

var done = 0;
for(var i =0; i < venues.length; i++){
  venues[i].save(function(err, result){
    done++;
    if(done === venues.length){
      mongoose.disconnect();
    };
  });
};