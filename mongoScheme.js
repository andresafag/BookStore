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
        minLength: [4, "Not long enough"],
        required: [true, "Why not putting the username"],
    },
    email: {
        type: String,
        required: [true, "We need an email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    passwd: {
        type: String,
        required: [true, "We need a password"],
        
    }
})
// SAVING THE SCHEMA
const member = mongoose.model('member', memberScheme);


// EXPORTING THE MEMBER SCHEMA
module.exports = member


