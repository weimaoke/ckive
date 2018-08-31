$(document).ready(function() {
  var peer = new Peer('ppkk002'); //new Peer('ppkk001', {key: 'myapikey'});
  var conn = peer.connect('ppkk001');
  conn.on('open', function(){
    conn.send('Hello Weimao! This is directly from another browser.');
  });
});
