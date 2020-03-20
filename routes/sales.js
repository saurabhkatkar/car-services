var express = require('express');
var router = express.Router();

/* GET sales page. */
router.get('/', function(req, res, next) {
  res.render('sales');
});

module.exports = router;