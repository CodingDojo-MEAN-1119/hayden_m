const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();
    app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);
require('./server/config/routes.js')(app)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port);