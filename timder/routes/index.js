
/*
 * GET home page.
 */

var companyname = "";
var worktype = "";

exports.index = function(req, res){
  res.render('index', { title: 'Express'});
};

exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add New User' });
};

exports.scoreboard = function(db){
    return function(req, res) {
        var collection = db.get('votecollection');
        collection.find({},{},function(e,docs){
            res.render('scoreboard', {
                "companylist" : docs, 
                title: 'Scoreboard'
            });
        });
    };
};

exports.userlist = function(db) {
    return function(req, res) {
		if(companyname != "" && worktype != ""){
			var collection = db.get('usercollection');
			collection.find({"worktype": worktype},{},function(e,docs){
				res.render('userlist', {
					"userlist" : docs, 
					"companyname": companyname,
                    title: 'Selectie voor: '+ companyname
				});
			});
		}
		else
		{
			res.location("/");
			res.redirect("/");
		}
    };
};

exports.admin = function(db){
    return function(req, res) {
        var collection = db.get('votecollection');
        var collection2 = db.get('usercollection');
        collection2.find({},{}, function(e,docs2){
        collection.find({},{},function(e,docs){
            res.render('admin', {
                "companylist" : docs, 
                "userlist": docs2,
                title: 'Admin'
            });
        });
        });
    };
};


exports.adduser = function(db) {
    return function(req, res) {
        // Form values eruit halen en in een variabele steken
        var firstName = req.body.firstname;
		var lastName = req.body.lastname;
        var email = req.body.useremail;
		var password = req.body.password;
        
		var worktext1 = req.body.worktext1;
        var worktext2 = req.body.worktext2;
        var worktext3 = req.body.worktext3;
        
		var workphoto1 = req.body.workphoto1;
		var workphoto2 = req.body.workphoto2;
		var workphoto3 = req.body.workphoto3;
        
        var worktype = req.body.worktype;

        // Collection aanmaken
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "firstname" : firstName,
			"lastname" : lastName,
            "email" : email,
            "worktype": worktype,
			"workdescriptions" : [
				{"description": worktext1},
				{"description": worktext2},
				{"description": worktext3}
			],
            "workphotos" : [
				{"photo": workphoto1},
				{"photo": workphoto2},
				{"photo": workphoto3}
			]
        }, function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // Header url naar /userlist aanpassen als het succesvol is.
                res.location("newuser");
                // En naar de succes pagina sturen.
                res.redirect("newuser");
            }
        });

    }
}

exports.setcompanyuser = function(db){
    return function(req, res){
        worktype = "";
        companyname = "";
        worktype = req.body.worktype;
        companyname = req.body.companyname;
        var companyNameData = req.body.companyname;
        
        var collection = db.get('votecollection');
        
        collection.insert({
            "companyname" : companyNameData,
            "votes" : [
                
            ]
        }, function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                res.send({redirect: '/userlist'});
            }
        });
    }
};

exports.resetcompanyuser = function(req, res){
  companyname = "";
  worktype = "";
  res.location("/");
  res.redirect("/");
};

exports.insertvotes = function(db){
    return function(req, res){
        var votedName = req.body.votedname;
        
        var collection = db.get('votecollection');
        
        collection.update(
            {"companyname": companyname},
            {
                $push: {"votes" : {"votedname": votedName}}
            }
        , function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                res.send("Added vote to database!");
            }
        });
    }
}

exports.cleardb = function(db){
    return function(req, res){
        var collection = db.get('votecollection');
        
        collection.remove(
         function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // Header url naar /userlist aanpassen als het succesvol is.
                res.location("admin");
                // En naar de succes pagina sturen.
                res.redirect("admin");
            }
        });
    }
}

exports.removeuser = function(db){
    return function(req, res){
        var userid = req.body.userid;
        var collection = db.get('usercollection');
        
        collection.remove(
            {"_id": userid},
            {}
         , function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                res.send({redirect: '/admin'});
            }
        });
    }
}

exports.removevote = function(db){
    return function(req, res){
        var voteid = req.body.voteid;
        var collection = db.get('votecollection');
        
        collection.remove(
            {"_id": voteid},
            {}
         , function (err, doc) {
            if (err) {
                // Failed -> error boodschap geven
                res.send("There was a problem adding the information to the database.");
            }
            else {
                res.send({redirect: '/admin'});
            }
        });
    }
}