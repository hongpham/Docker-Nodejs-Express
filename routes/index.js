var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Hong Pham\'s Resume' });

});

module.exports = router;
