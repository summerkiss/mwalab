var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('error', { title: 'Express' });
});

module.exports = router;
/**
 * Created by yuyang on 01/07/2017.
 */
