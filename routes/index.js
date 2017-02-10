var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
    res.render('pages/about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
    res.render('pages/projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
    res.render('pages/services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
    res.render('pages/contact', { title: 'Contact Me' });
});



module.exports = router;
