var config = require('../config');
var http = require('http');

exports.getRestaurants = function(next) {
  var hotel = config.address;

  var args = {
    datetime: 'ASAP',
    addr: hotel.addr,
    city: hotel.city,
    zip: hotel.zip
  };
  var options = {
    host: 'api.delivery.com',
    port: 80,
    path: '/',
    method: 'GET'
  }

  next(null, { sample: 'data'});
  // http.request(options, function (res) {
  //   var data = '';
  //   if(res.statusCode != 200) {
  //     console.log(res.statusMessage);
  //     return next(res.statusMessage);
  //   }


  //   res.on('data', function (chunk) {
  //     data += chunk;
  //   });

  //   res.on('end', function (chunk) {
  //     return next(null, data);
  //   });
  // });
}