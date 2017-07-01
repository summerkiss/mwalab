var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const aaa = fetch('http://jsonplaceholder.typicode.com/users')
            .then (d => d.json())
            .then (users =>res.render('users', { userlist: users } ))
            //.then(users => { res.send("user"+JSON.stringify(users))})
            .catch(err => {console.log(err)});
          //console.log("user"+JSON.stringify(users));
});



module.exports = router;
