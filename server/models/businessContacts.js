let mongoose = require('mongoose');

// create a model class
let businessContactsSchema = mongoose.Schema({
    Name: String,
    Number: Number,
    Email: 
    {type: String,
    default: '',
    trim: true,
    required: 'email is required'}
},
{
  collection: "businessContacts"
});

exports.BusinessContact = mongoose.model('businessContacts', businessContactsSchema);
