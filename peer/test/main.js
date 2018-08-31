$(document).ready(function() {
  var peer = new Peer('ppkk001'); //new Peer('ppkk001', {key: 'myapikey'});
  peer.on('connection', function(conn) {
    conn.on('data', function(data){
      console.log(data);
    });
  });
});
