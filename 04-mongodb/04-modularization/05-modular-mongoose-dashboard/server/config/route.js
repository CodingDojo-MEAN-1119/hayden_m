const mongoose = require('mongoose'),
      Dog = mongoose.model('Dog')
module.exports = function(app){
    app.get('/', (req,resp)=>{
        Dog.find()
            .then(data=> {
                resp.render('index', {dogs:data})
            })
            .catch(err=> err.throw(resp.json(err)));
    });
    
    app.post('/new', (req,resp)=>{
      
    app.post('/dogs',(req,resp)=>{
        
    app.get('/dogs/:id', (req,resp)=>{
    
    app.get('/dogs/edit/:id', (req,resp)=>{
    
    app.post('/dogs/:id', (req,resp)=>{
        
    app.get('/dogs/destroy/:id', (req,resp)=>{
       
    });