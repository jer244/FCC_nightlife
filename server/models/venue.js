var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema ({
    id: {type: String, required: true},
    numGoing: {type: Number, required: true}
});

venueSchema.methods.addUser = function(){
  return ;
};



var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
