var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
//res.render('computation', { title: 'Neeha Beerkur' });

if(req.query.x ==undefined ) {
x=Math.floor(Math.random()*10);
y=Math.fround(Math.random());
let y1=Math.sqrt(x,y);
let y2=Math.acosh(y);
let y3=Math.tan(x);
res.send('Math.sqrt() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.acosh() applied to '+y+' is '+y2+"<br>"+'Math.tan() applied to '+x+' is'+y3);

}
else{

x = req.query.x;
let y1=Math.sqrt(x,x);
let y2=Math.acosh(x);
let y3=Math.tan(x);

res.send('Math.sqrt() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.acosh() applied to '+y+' is '+y2+"<br>"+'Math.tan() applied to '+x+' is'+y3);
}
});

module.exports = router;