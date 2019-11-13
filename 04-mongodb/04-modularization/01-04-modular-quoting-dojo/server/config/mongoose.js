const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')
module.exports = function(app){
    const quoteSchema = new mongoose.Schema({
        name: String,
        quote: String
    });
    const Quote = mongoose.model('quotes', quoteSchema);
}