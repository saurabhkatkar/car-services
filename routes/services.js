var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET sales page. */
router.get('/', function(req, res, next) {
  
  res.render('pages/services');
});

router.post('/add',function(req, res, next) {
  var sid,cid,list,cost;
    sid = req.body.showroomId;
    cid = req.body.customerId;
    list =  req.body.listServices;
    cost = req.body.costServices;
    firebase.database().ref('services/' + sid).set({
      cid: cid,
      list: list,
      cost: cost
    }).then(function(){
      console.log("Data Saved Succesfully.");
    });
    res.redirect('/services');
});

module.exports = router;