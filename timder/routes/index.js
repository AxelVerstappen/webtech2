
/*
 * GET home page.
 */

var companyname = "";

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.scoreboard = function(req, res){
  res.render('scoreboard', { title: 'Scoreboard' });
};

exports.userlist = function(db) {
    return function(req, res) {
		if(companyname != ""){
			var collection = db.get('usercollection');
			collection.find({},{},function(e,docs){
				res.render('userlist', {
					"userlist" : docs, 
					"companyname": companyname
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

exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add New User' });
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
			"password" : password,
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

exports.companyuser = function(req, res){
	var submittedName = req.body.companyname;
  	companyname = submittedName;
	
	res.location("userlist");
	res.redirect("userlist");
};