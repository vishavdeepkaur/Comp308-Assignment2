var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('pages/index', { title: 'Express' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> 869ea423099957ea5d0e2a879cfbfb9e1b4edb53
});

module.exports = router;
