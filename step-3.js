var https = require('https');

function getAndPrintHTMLChunks (options) {


https.get(options, function (response) {

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

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTMLChunks(requestOptions)