var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema ({
    venueId: {type: String, required: true},
    users: [{type: String }]
});

venueSchema.methods.addUser = function(){
  return ;
};

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
