

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

const userSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 0},
    message: {type: String, required: true, minlength:0},

});
const User = mongoose.model("User", userSchema);

app.get('/', (req,resp)=>{
    User.find()
        .then(data=> {
            resp.render('index', {user:data})
        })
        .catch(err=> err.throw(resp.json(err)));
});

app.post('/user',(req,resp)=>{
    const user = new User();
   
    user.name = req.body.name;
    user.message = req.body.message;
    user.save()
        .then(dogData => {
            console.log("user created: ");
        resp.redirect('/')})
        .catch(err => console.log(err));
});

app.get('/user/:id', (req,resp)=>{
    User.find({_id: req.params.id}, (err,response)=>{
        if(err){console.log(err);}
        resp.render('/show', {user:response[0]})
    })
});

app.get('/user/destroy/:id', (req,resp)=>{
    User.remove({_id: req.params.id}, req.body, (err,response)=>{
        if(err){console.log(err);}
        resp.redirect(`/`);
    })
});

app.post("/comment", function(req, res) {
    const comment = new Comment();
   
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    user.save()
        .then(dogData => {
            console.log("user created: ");
        resp.redirect('/')})
        .catch(err => console.log(err));
        });

app.listen(8000, ()=> console.log("listening on port 8000."));