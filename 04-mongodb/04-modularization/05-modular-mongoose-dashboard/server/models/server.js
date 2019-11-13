/////////// Setting Server & Dependencies ////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/test_app', 
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex: true}
);
mongoose.connection.once('connected', () => console.log("working!"));
require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')(app)

app.listen(8000, ()=> console.log("port 8000."));