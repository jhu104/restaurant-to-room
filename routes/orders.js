var express = require('express');
var restrict = require('../auth/restrict');
var router = express.Router();
var orderService = require('../services/order-service');

/* GET home page. */
router.get('/', restrict, function(req, res, next) {
  var vm = {
    title: 'Place an order',
    firstName: req.user ? req.user.firstName : null
  };
  res.render('orders/index', vm);
});

router.get('/api/restaurants', restrict, function(req, res, next) {
  orderService.getRestaurants(function(err, restaurants) {
    if(err) {
      return res.status(500).json({error: 'Failed to retrieve restaurants'});
    }
    res.json(restaurants);
  });
})

module.exports = router;