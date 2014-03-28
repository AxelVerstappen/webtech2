var client = new Faye.Client('http://localhost:8000/');

client.subscribe('/messages', function(message) {
  alert('Got a message: ' + message.text);
});

client.publish('/scoreboard', {
  text: 'Hello world'
});