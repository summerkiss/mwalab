/**
 * Created by yuyang on 01/07/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('newsletter', { title: 'Express' });
});

router.post('/subscribe', function(req, res, next) {
    var email = req.body.email;
    console.log(email);
    // req.assert(email,'Email address can not be empty!').notEmpty();
    // var errors = req.validationErrors();
    // console.log(errors);
    // if(errors){
    //     res.render('error',{error: errors});
    // }else{
    //     res.redirect("/thankyou/"+email);
    // }
    res.redirect("/thankyou/"+email);

});

module.exports = router;