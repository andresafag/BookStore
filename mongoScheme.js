var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/usersData', function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected to mongodb mr Andres');
  
 });


var memberScheme = mongoose.Schema({
    userName: String,
    email: { type: String, required: true},
    passwd: {type:String, required : true}
})
const member = mongoose.model('member', memberScheme);

module.exports = member


