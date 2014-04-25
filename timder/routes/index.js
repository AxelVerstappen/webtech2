
/*
 * GET home page.
 */

var companyname = "";

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
		if(companyname != ""){
			var collection = db.get('usercollection');
			collection.find({},{},function(e,docs){
				res.render('userlist', {
					"userlist" : docs, 
					"companyname": companyname,
                    title: 'Testing'
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


exports.adduser = function(db) {
    return function(req, res) {
        // Form values eruit halen en in een variabele steken
        var firstName = req.body.firstname;
		var lastName = req.body.lastname;
        var email = req.body.useremail;
		var password = req.body.password;
		var work = req.body.work;
		var workphoto1 = req.body.workphoto1;
		var workphoto2 = req.body.workphoto2;
		var workphoto3 = req.body.workphoto3;

        // Collection aanmaken
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "firstname" : firstName,
			"lastname" : lastName,
            "email" : email,
			"work" : work,
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
                res.send("Added companyname to database!");
            }
        });
    }
};

exports.resetcompanyuser = function(req, res){
  companyname = "";
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