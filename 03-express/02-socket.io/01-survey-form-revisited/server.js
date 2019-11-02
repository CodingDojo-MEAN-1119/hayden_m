const express = require('express');
const app = express();
const session = require('express-session');
const io = require('socket.io')(server);
var counter = 0;
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
io.on('connection', function (socket) { 
  
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) {
      console.log(data.msg); 
    });
      
});
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.render('index')
});
app.post('/info', (request, response) => {
    results = request.body
    response.render('showinfo', {results: results})
});
app.listen(8000);
