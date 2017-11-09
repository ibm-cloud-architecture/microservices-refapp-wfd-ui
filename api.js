var request = require('request'); // require in request
require('dotenv').config();
//console.log(process.env.API_URL)
var initGet = {uri: process.env.WFD_MENU_URL};

var apiCaller = function (url, cb) {
  //use request to make the external http call to the JSON api
  request({
    url: url,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      cb(body);// Send body/response to callback
      console.log(body);
    }
  })
};
// Call the api with a call back
var apiGet = function(cb) {
  return apiCaller(initGet.uri, cb);
};

// Export the functions for external access
module.exports = {
  apiGet: apiGet
};
