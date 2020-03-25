var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET sales page. */
router.get('/', async function(req, res, next) {
  var customers= [];
  await firebase.database().ref('/customers/').once('value').then(function(querySnapshot) {
    querySnapshot.forEach(function(Snapshot){
      customers.push({
        id:Snapshot.key,
        fname: Snapshot.val().firstname,
        lname:Snapshot.val().lastname,
        address:Snapshot.val().address
      });
    })
    // ...
  });

  res.render('pages/customers',{customers : customers});
});

router.post('/add',function(req, res, next) {
  var {cid, fname , lname , address, pnum} = req.body;
  firebase.database().ref('customers/'+cid).set({
    firstname: fname,
    lastname:lname,
    address: address,
    phone_number : pnum
  }).then(function(){
    console.log("Data Saved Succesfully.");
  });
  res.redirect('/customers');
});

module.exports = router;