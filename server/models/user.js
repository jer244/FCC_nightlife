var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueVal = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    venues:[{type: String}]
});

userSchema.plugin(mongooseUniqueVal);

userSchema.methods.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
