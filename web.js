var express = require('express')
    fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   fs.readFile('index.html', function(err, data) {
       var contents = data;
       console.log(contents);
       response.send(contents);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
