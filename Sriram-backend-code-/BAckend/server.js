var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var databaseconnection = require('./Dbconnection/config.js');
console.log("Initializing...");
mongoose.Promise = global.Promise;

function check(){
mongoose.connect(databaseconnection.url,{useNewUrlParser:true}).then(()=>{
    console.log("****** Mongodb Connected @ Cloud ******");
     clearInterval(clearint);
}).catch(err =>{
    console.log("XXXX Mongodb !Connected  @ Cloud XXXX");
    clearInterval(clearint);
});
}

var clearint = setInterval(check,3000);

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
require('./Routes/routes')(app);
app.listen(3000);