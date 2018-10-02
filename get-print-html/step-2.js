var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

var totalData = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    totalData += data

  });

  response.on('end', function() {
    console.log(totalData + 'Response stream complete.');
  });

});

}

getAndPrintHTMLChunks()