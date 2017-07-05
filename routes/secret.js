/**
 * Created by yuyang on 03/07/2017.
 */

var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
//const crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = mongo.db("mongodb://localhost:27017/testDB",{native_parser:true});
    var records = db.collection('testCol');
    var record = records.findOne({},function (err,item) {
        console.log("item"+item.message);
        //req.message = item.message;
        //next();
        db.close;

        let crypto;
        try {
            crypto = require('crypto');
            var decipher = crypto.createDecipher('aes256', 'asaadsaad');
            decipher.setAutoPadding(false);
            let decrypted = '';
            decipher.on('readable', () => {
                const data = decipher.read();
                if (data)
                    decrypted += data.toString('utf8');
            });
            decipher.on('end', () => {
                console.log(decrypted);
                // Prints: some clear text data
                res.render('secret', { message: decrypted});
            });

            const encrypted =item.message;
            decipher.write(encrypted, 'hex');
            decipher.end();

        } catch (err) {
            console.log('crypto support is disabled!');
        }



    })


});

module.exports = router;
