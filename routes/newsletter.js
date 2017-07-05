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
    req.assert('email','Email address can not be empty!').notEmpty();
    var errors = req.validationErrors();
    console.log('====='+1);
    if(errors){
        //console.log('=====3'+errors.json());
        res.render('error',{results: errors});

    }else{
        console.log('====='+2);
        // var fs = require('fs');
        // let Duplex = require('stream').Duplex;
        // let stream = new Duplex();
        // var path = require('path');
        // var buf = Buffer.from(email);
        // var writable = fs.createWriteStream(path.join(__dirname,'/subscribes.txt'));
        // stream.push(buf);
        // stream.pipe(writable);

        var fs = require('fs');
        var path = require('path');
        var subStream = fs.createWriteStream(path.join(__dirname,'/subscribes.txt'), {'flags': 'a'});
        // use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
        subStream.write(email+'\n');
        subStream.end();
        res.redirect("/thankyou/"+email);
    }
    //res.redirect("/thankyou/"+email);

});

router.get('/subscribe/:email', function(req, res, next) {
    res.render('newsletter', { title: 'Express' });
});

 saveSubscrible = function(data){
    return new Promise(function (resolve,reject) {

        var fs = require('fs');
        var buf = Bffer.from(data);
        var writable = fs.createWriteStream(path.join(__dirname,'/subscribes.txt'));
        buf.pipe(writable);
    })
}
module.exports = router;