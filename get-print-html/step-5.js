var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHtml(html) {

  console.log(html)

}

getHTML(requestOptions, printHtml);
