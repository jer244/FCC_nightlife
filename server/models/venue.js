var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema ({
    venueId: {type: String, required: true},
    userId: {type: String, required: true },
    numGoing: {type: Number, required: true, default: 0}
});

venueSchema.methods.addUser = function(){
  return ;
};



var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
