$(document).ready(function(){
    // Setup Leap loop with frame callback function
    var controller = new Leap.Controller({
      host: '127.0.0.1',
      port: 6437,
      enableGestures: true,
      frameEventName: 'animationFrame'
    });
    var frame;
    var gestures;

    //check connection
    controller.on('connect', function() {
      console.log("Successfully connected.");
    });

    //get frames
    controller.on( 'frame' , function( data ){

    this.frame = data;

        for (var i = 0; i < this.frame.gestures.length; i++){

            try {
                var gesture  = this.frame.gestures[0];
                var type = gesture.type;
                    if(gesture.startPosition[0] > gesture.position[0])
                    {
                        var listitem = $('.listitems').last().fadeOut(3000);
                        setTimeout(function(e){
                            listitem.attr("class", "invisible");
                            var checklistitems = document.getElementsByClassName('listitems');
                            if(checklistitems.length == 0)
                            {
                             $("#btnSubmit").css("display", "block");
                            }
                        }, 3000);

                    } if(gesture.startPosition[0] < gesture.position[0]) {
                        var listitem = $('.listitems').last();
                        var voteName = listitem.find('h3');

                         client.publish('/channel', {
                          text: voteName.text()
                         });

                         $.ajax({
                          type: 'POST',
                          url: "/insertvotes",
                          data: {votedname: voteName.text()},
                          success: function (data) {
                            console.log("Success");
                          },
                          dataType: "json"
                         });
                        
                        listitem.fadeOut(3000);
                        setTimeout(function(e){
                            listitem.attr("class", "invisible");
                            var checklistitems = document.getElementsByClassName('listitems');
                            if(checklistitems.length == 0)
                            {
                             $("#btnSubmit").css("display", "block");
                            }
                        }, 3000);
                    }
            } catch (err) {
                console.log(err);
                // generates error on !swipe
            }

        }

    });

    controller.connect();            
});
