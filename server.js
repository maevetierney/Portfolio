var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var path = app.use(express.static('app'));

// set the view engine to ejs
app.engine('html', require('ejs').renderFile);

// make express look in the public directory for assets (css/js/img)

// set the home page route
app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
