// IMPORTING THE MONGOOSE MODULE
var mongoose = require('mongoose');

// CONNECTING MONGOOSE 
mongoose.connect('mongodb://localhost/usersData', function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected to mongodb mr Andres');
  
 });

// IMPLEMENT AN SCHEMA FOR NEW MEMBERS
var memberScheme = mongoose.Schema({
    userName:  {
        type: String,
        required: [true, "Why not putting the username"],
        minLength: [5, "We need a long username please"]
    },
    email: String,
    passwd: String
})
// SAVING THE SCHEMA
const member = mongoose.model('member', memberScheme);


// EXPORTING THE MEMBER SCHEMA
module.exports = member


