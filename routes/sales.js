var express = require('express');
var router = express.Router();
var firebase = require('firebase');


/* GET sales page. */
router.get('/', function(req, res, next) {
  res.render('pages/sales');
});

router.post('/add',function(req, res, next) {
  var { fname , lname ,email,ctype,cmodel,cprice,zip,state,city} = req.body;
  firebase.database().ref('sales/').push({
    firstname: fname,
    lastname:lname,
    email_id:email,
    car_type:ctype,
    car_model:cmodel,
    car_price:cprice,
    zip_code:zip,
    state: state,
    city: city
  }).then(function(){
    console.log("Data Saved Succesfully.");
  });
  res.redirect('/sales');
});

module.exports = router;