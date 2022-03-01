// IMPORTING THE MODULES TO WORK WITH THEM
const express = require('express');
const app  = express();

// PORT 8000 BY DEFAULT
let port = process.env. port || 8000;
// Parsing module
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
// Importing the schema from mongodb
const member = require('./mongoScheme');


// EXECUTING PUG TEMPLATE ENGINE
app.set('view engine', 'pug');

// EXPRESSING USING A STATIC FILE NAMED PUBLIC
app.use(express.static('public'));


// EXPRESS EXECUTES MAIN PAGE LAYOUT

app.get('/', function (sol, res){
    res.render("layout")

});

// EXPRESS REQUEST
app.post('/userData', function(sol, res){
    
    var Member = new member({
         userName:sol.body.name,
          email:sol.body.email,
          passwd:sol.body.inputPassword
        
    })
    console.log("User data has been succesfully sent over to mongoDB...Check that out the name was ")

    Member.save(function(err, doc){
        if(!err){ 
            res.send("We saved your information amigo " + Member)
            console.log(doc)
        }
        else 
            console.log("something went wrong")
    })
   
});

// MEMBERS SECTION EXECUTION
app.get('/member', function (sol, res){
    res.render('member')
    

});
// CATEGORYSECTION EXECUTION
app.get('/booksCat', function (sol, res){
    res.render('booksCat')
    


});
// PRINT SECTION EXECUTION
app.get("/print", (sol, res)=>{
    res.render("print")
});


// REMINDER SECTION
app.get('/reminder', function (sol, res){
    res.render('reminder')

});


// REQUESTING BOOKS SECTION
app.get('/request', function (sol, res){
    res.render('request')

});


// PDF EXECUTION
app.get('/pdf', function (sol, res){
    res.render('pdf')

});


// FORUM SECTION EXECUTION
app.get('/foro', function (sol, res){
    res.render('foro')

});


// READ SECTION EXECUTION
app.get('/read', function (sol, res){
    res.render('read')

});



// EXPRESS LISTENING TO A PORT
app.listen(port, ()=>{
    console.log("loud and clear on port ", port)
});