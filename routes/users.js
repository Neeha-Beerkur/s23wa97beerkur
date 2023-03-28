var express = require('express');
var router = express.Router();

/* GET users listing. */
var sum = 0;
var more = 0;
router.get('/', function(req, res, next) {


more++;
sum += more;
res.send(`sum is :${sum}`);
});


module.exports = router;
