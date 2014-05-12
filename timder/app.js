
/**
 * Module dependencies.
 */

var express = require('express');
var faye = require('faye');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var expressValidator = require('express-validator');

//db vars
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://Admin:x1c5k9l7h3@oceanic.mongohq.com:10078/timder');

//faye server vars
var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});
var app = express();
var server = http.createServer(app);
bayeux.attach(server);

// all environments
app.use(express.favicon('favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(expressValidator());
app.use(express.methodOverride());
app.use(app.router);




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//getpages
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/userlist', routes.userlist(db));
app.get('/scoreboard', routes.scoreboard(db));
app.get('/newuser', routes.newuser);
app.get('/admin', routes.admin(db));

//postpages
app.post('/newuser', routes.adduser(db));
app.post('/removeuser', routes.removeuser(db));
app.post('/removevote', routes.removevote(db));
app.post('/cleardb', routes.cleardb(db));
app.post('/insertvotes', routes.insertvotes(db));
app.post('/setcompanyuser', routes.setcompanyuser(db));
app.post('/resetcompanyuser', routes.resetcompanyuser);

server.listen(process.env.PORT || 3000);
console.log("Server up and listening on port 3000")


