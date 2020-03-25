var express = require('express');
var router = express.Router();
var firebase = require('firebase');


/* GET sales page. */
router.get('/',async function(req, res, next) {
  var reports= [];
  await firebase.database().ref('/reports/').once('value').then(function(querySnapshot) {
    querySnapshot.forEach(function(Snapshot){
      reports.push({
        sid:Snapshot.key,
        sname: Snapshot.val().showroom_name,
        sales:Snapshot.val().sales,
        address:Snapshot.val().address,
        rate: Snapshot.val().rating,
      });
    })
    // ...
  });
  res.render('pages/reports',{reports:reports});
});

router.post('/add',function(req, res, next) {
  var {sid, sname , address, sales ,rate} = req.body;
  firebase.database().ref('reports/'+sid).set({
    showroom_name: sname,
    address: address,
    sales:sales,
    rating:rate,
    }).then(function(){
    console.log("Data Saved Succesfully.");
  });
  res.redirect('/reports');
});

module.exports = router;