// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	Quote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            res.render('quotes', { quotes: quotes });
          });
    });
  
    },
    
    create: function(req, res) {
        Quote.create(req.body, function(err) {
            if (err) { console.log(err); }
            res.redirect('/quotes');
          });
      });
    },

    destroy: function(req, res) {
    	app.get('/', function(req, res) {
            res.render('index');
        });
    }
};