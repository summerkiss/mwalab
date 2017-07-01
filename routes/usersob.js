/**
 * Created by yuyang on 30/06/2017.
 */
var fetch = require('node-fetch');
var express = require('express');
var Rx = require('@reactivex/rxjs');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
    const promiseob = fetch('http://jsonplaceholder.typicode.com/users');

    Rx.Observable.fromPromise(promiseob.then(data => data.json()))
        //.map(data => data.json())
        //.subscribe(users => console.log(users));
        //.subscribe(e=> console.log(e));
        .subscribe( users =>res.render('users', { userlist: users } ));

});



module.exports = router;