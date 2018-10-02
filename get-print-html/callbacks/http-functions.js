var https = require('https');

module.exports = function getHTML(options, callback) {

https.get(options, function (response) {

var totalData = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    totalData += data

  });

  response.on('end', function() {
    callback(totalData);
  });

});

}

function printHTML (html) {
  console.log(html + 'Response stream complete.');
};

