const mongoose = require('mongoose');

const newsletterEmails = mongoose.Schema({
    email: { type: String }
})

module.exports = mongoose.model('newsletterEmails', newsletterEmails);