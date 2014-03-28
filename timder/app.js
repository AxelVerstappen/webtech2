
/**
 * Module dependencies.
 */

var express = require('express');
var faye = require('faye');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

//db vars
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/timder');

//faye server vars
var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});
var app = express();
var server = http.createServer(app);
bayeux.attach(server);

//sessions code


// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//getpages
app.get('/scoreboard', routes.scoreboard);
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/userlist', routes.userlist(db));
app.get('/newuser', routes.newuser);

//postpages
app.post('/adduser', routes.adduser(db));

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});

app.post('/message', function(req, res) {
    bayeux.getClient().publish('/channel', { text: req.body.message });
    console.log('broadcast message:' + req.body.message);
    res.send(200);
});

server.listen(3000);
console.log("Server up and listening on port 3000")


