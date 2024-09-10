var express = require('express');
var app = express();
var path = require('path');

var port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname, 'data/index.html'));
}); 

app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'data/home.html'))
})

app.get('/news',function(req,res){
    res.sendFile(path.join(__dirname,'data/News.html'))
})

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'data/about.html'))
})

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'data/login.html'))
})

app.get('/registration',function(req,res){
    res.sendFile(path.join(__dirname,'data/registration.html'))
})

app.listen(port, function() {
    console.log('app running on port ' + port); 
});
