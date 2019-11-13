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


const dogSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2},
    weight: {type: Number, required: true, minlength:1},
    color: {type: String, required: true, minlength: 2}

}, {timestamps:true }

);

const Dog = mongoose.model('Dog', dogSchema);


app.get('/', (req,resp)=>{
    Dog.find()
        .then(data=> {
            resp.render('index', {dogs:data})
        })
        .catch(err=> err.throw(resp.json(err)));
});

app.post('/new', (req,resp)=>{
   resp.render('add')
});

app.post('/dogs',(req,resp)=>{
    const dogs = new Dog();
   
    dogs.name = req.body.name;
    dogs.weight = req.body.weight;
    dogs.color = req.body.color;
    dogs.save()
        .then(dogData => {
            console.log("doggo created: "+ dogData);
        resp.redirect('/')})
        .catch(err => console.log(err));
});

app.get('/dogs/:id', (req,resp)=>{
    Dog.find({_id: req.params.id}, (err,response)=>{
        if(err){console.log(err);}
        resp.render('show', {dogs:response[0]})
    })
});

app.get('/dogs/edit/:id', (req,resp)=>{
    Dog.find({_id: req.params.id}, (err,response)=>{
        if(err){console.log(err);}
        resp.render('edit', {dogs:response[0]})
    })
});

app.post('/dogs/:id', (req,resp)=>{
    Dog.updateOne({_id: req.params.id}, req.body, (err,response)=>{
        if(err){console.log(err);}
        resp.redirect(`/dogs/${req.params.id}`)
    })
});
app.get('/dogs/destroy/:id', (req,resp)=>{
    Dog.remove({_id: req.params.id}, req.body, (err,response)=>{
        if(err){console.log(err);}
        resp.redirect(`/`);
    })
});

app.listen(8000, ()=> console.log("port 8000."));