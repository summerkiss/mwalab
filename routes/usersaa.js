/**
 * Created by yuyang on 01/07/2017.
 */
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const promiseaa = fetch('http://jsonplaceholder.typicode.com/users');

    async function answer() {
        try{
            let result = await promiseaa.then(data => data.json());
            console.log(result);
            res.render('users', {userlist: result});
        }catch(error){
            res.render('error',{error: error});
        }
    }

    answer();
});


module.exports = router;