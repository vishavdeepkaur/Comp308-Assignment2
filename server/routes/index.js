var express = require('express');
var router = express.Router();

let passport = require('passport');

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

router.get('/login', (req, res, next)=>{
  // check to see if the user is not already logged in
  if(!req.user) {
    // render the login page
    res.render('auth/login', {
      title: "Login",
      books: '',
   messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/books'); // redirect to games list
  }
}); 


module.exports = router;
