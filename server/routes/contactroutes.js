// / modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let businessContact = require('../models/businessContacts').BusinessContact ;

// create a function to check if the user is authenticated
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}


/* GET books List page. READ */
router.get('/', requireAuth, (req, res, next) => {
  // find all books in the books collection
  businessContact.find((err, businessContacts) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('contactsList/index', {
        title: 'Business Contacts',
        businessContacts: businessContacts,
        displayName: req.user.displayName
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', requireAuth, (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  res.render('contactsList/details', {
    title: "Add a new Business Contact",
    businessContacts: '',
    displayName: req.user.displayName
  });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', requireAuth, (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  let newBusinessContacts = new businessContact({
    "Name": req.body.Name,
    "Number": req.body.Number,
    "Email": req.body.Email,
   
  });

  businessContact.create(newBusinessContacts, (err, businessContact) => {
    console.log(req, res)
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/businessContacts');
    }
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', requireAuth, (req, res, next) => {




  try {
    // get a reference to the id from the url
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    // find one book by its id
    businessContact.findById(id, (err, businessContacts) => {
      if (err) {
        console.log(err);
        res.end(error);
      } else {
        // show the book details view
        res.render('contactsList/details', {
          title: 'Contact Details',
          businessContacts: businessContacts,
          displayName: req.user.displayName
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.redirect('/errors/404');
  }

});

// POST - process the information passed from the details form and update the document
router.post('/:id', requireAuth, (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  // get a reference to the id from the url
  let id = req.params.id;

  let updateBusinessContact = businessContact({
    "_id": id,
     "Name": req.body.Name,
    "Number": req.body.Number,
    "Email": req.body.Email,
  });

  businessContact.update({ _id: id }, updateBusinessContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the books List
      res.redirect('/businessContacts');
    }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', requireAuth, (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  // get a reference to the id from the url
  let id = req.params.id;

  businessContact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the games list
      res.redirect('/businessContacts');
    }
  });


});


module.exports = router;