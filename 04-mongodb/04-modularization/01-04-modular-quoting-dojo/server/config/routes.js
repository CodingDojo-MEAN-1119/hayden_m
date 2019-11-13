const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote')
module.exports = function(app){
    app.get('/quotes', function(req, res) {
      quotes.index(req, res);
})
       
    app.post('/quotes', function(req, res) {
      quotes.index(req, res);
})
    
    app.get('/', function(req, res) {
      quotes.index(req, res);
})
  
       // all other routes
}        