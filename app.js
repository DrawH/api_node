var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=4b82fe83';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render('results', {data: data});
        }
    });
});

 app.listen(3000, function(){
     console.log('Movie app started on port: 3000');
 });
