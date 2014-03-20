<?php  
  if(!empty($_POST["email"])){
    $file = fopen("mailinglist.txt", "a+");
    $email = $_POST["email"]."\n";
    fwrite($file, $email);
    fclose($file);
    $succes = "Bedankt om te registreren.";
  }
?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Terrapke</title>
  <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
  <style>
    body{
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 2.5em;
      line-height: inherit;
    }
    .good{
      background-color: #E38B00;
    }
    .badd{
      background-color: #1F1926;
    }
    .container{
      color: white;
    }
    h1 span{
      color: orange;
    }
    #temperatuur{
      font-size: 5em;
    }
    #icon{
      height: 150px;
    }
    .sunny{
      -webkit-animation:draaien 60s infinite;
    }
    @-webkit-keyframes draaien{
      100% {-webkit-transform: rotate(360deg);}
    }
    .cloudy{
      -webkit-animation:vervagen 30s infinite;
    }
    @-webkit-keyframes vervagen{
      0% {opacity:0;}
      50% {opacity:1;}
      100% {opacity:0;}
    }
    a:link, a:active, a:hover, a:visited{
      color: white;
      text-decoration: underline;
    }
    form input{
      color: black;
    }
    #message{
      display: block;
    }


  </style>
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<script>
		var l=document.getElementById("locatie");
		navigator.geolocation.getCurrentPosition(succes);

		function succes(position){
  			var latitude =  position.coords.latitude; 
  			var longitude = position.coords.longitude;

  			var lastclear = localStorage.getItem("lastclear");
  			var time_now  = (new Date()).getTime();

  			var temp = localStorage.getItem("temperatuur");
  			var neersl = localStorage.getItem("neerslag");
  			var bewolkt = localStorage.getItem("bewolkt");

  			$("#temperatuur").append(Math.round(temp)+"°C");
  			if(temp>10 && neersl<25 && bewolkt<75){
  				$("#feedback").append("Ideaal weer voor een terraske, laat je email achter zodat we je op de hoogte kunnen houden!");
          $("body").addClass("good");
          $("#icon").attr("src" , "image/sunny.png");
          $("#icon").addClass("sunny");
  			}else{
  				$("#feedback").append("Niet al te best weer, maar laat zeker je email achter en we houden je op de hoogte!");
          $("body").addClass("badd");
          $("#icon").attr("src" , "image/cloudy.png");
          $("#icon").addClass("cloudy");
  			}

  			if((time_now - lastclear) > 1000*60*60){
    			localStorage.clear();
    			localStorage.setItem("lastclear", time_now);

  				$.ajax({
      				url: "https://api.forecast.io/forecast/59c8fdf12359bd12e3b39d51a2abe479/"+latitude+","+longitude,
      				dataType: "jsonp"
    			})
      			.done(function(data){
        			console.log(data);

      				localStorage.setItem("temperatuur",((data.currently.temperature)-32)*5/9);
      				localStorage.setItem("neerslag",((data.currently.precipProbability)*100));
      				localStorage.setItem("bewolkt",((data.currently.cloudCover)*100));
      			});
      		}
  		}
	</script>
</head>
<body>
  <div class="container">
    <div class="col-md-8">
	<h1>Een passie voor het weer en apps?<br/> Kom dan mee een terr<span>app</span>ke doen!</h1>
	<h3 id="feedback"></h3>
    <div class="row">
      <div class="col-md-6"><h2 id="temperatuur"></h2></div>
      <div class="col-md-6"><img id="icon" src="" alt="icon"></div>
    </div>
	
	<p>Ga jij binnenkort verder studeren en wil jij net als ons niets liever doen dan knappe websites, mobile apps en webapplicaties bouwen? Dan ben jij een perfecte kandidaat voor onze opleiding <a href="http://www.weareimd.be/">Interactive Multimedia Design</a></p>
	<p>Kom mee een terraske doen aan onze <a href="http://www.thecreativitygym.be/">Creativity Gym</a> en neem meteen een kijkje in onze opleiding aan de Thomas More hogeschool in Mechelen.</p>
	<p>Laat je email adres achter en we mailen de exacte datum, locatie en tijdstip naar je door.</p>
	
	<form action="" method="post">
    <?php  
      if(isset($succes)){
        echo "<label for='email' id='message'>".$succes."</label>";
      }
    ?>
		<input type="email" name="email">
    <input type="submit" name="btnSend" value="Inschrijven">
	</form>
    </div>
  </div>
</body>
</html>