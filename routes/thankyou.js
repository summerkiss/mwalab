/**
 * Created by yuyang on 03/07/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:email', function(req, res, next) {
    var email = req.params.email;
    console.log("email"+email)
    res.render('thankyou', { title: 'Thank You' , email: email });
});

module.exports = router;
