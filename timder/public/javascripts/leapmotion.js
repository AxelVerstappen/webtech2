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
    var readGesture = true;
    
    var client = new Faye.Client('/faye',{
     timeout: 20
    });

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
                    if(gesture.startPosition[0] < gesture.position[0] && readGesture) 
                    {
                        readGesture = false;
                        var listitem = $('.listitems').last();
                        listitem.addClass('animated slideOutRight');
                        
                        listitem.fadeOut(2000, function(){
                            
                            readGesture = true;
                            
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
                            
                            listitem.remove();
                            
                            var checklistitems = document.getElementsByClassName('listitems');
                            if(checklistitems.length == 0)
                            {
                             $("#btnSubmit").css("display", "block");
                             $('.swipeSection').fadeOut(1000);
                            }
                        });
                    }
                
                    else
                    {
                        readGesture = false;
                        var listitem = $('.listitems').last();
                        listitem.addClass('animated slideOutLeft');
                        listitem.fadeOut(2000, function(){
                            readGesture = true;
                            listitem.remove()
                            var checklistitems = document.getElementsByClassName('listitems');
                            if(checklistitems.length == 0)
                            {
                             $("#btnSubmit").css("display", "block");
                             $('.swipeSection').fadeOut(1000);
                            }
                        });

                    }
            } catch (err) {
                console.log(err);
                // generates error on !swipe
            }

        }

    });

    controller.connect();            
});
