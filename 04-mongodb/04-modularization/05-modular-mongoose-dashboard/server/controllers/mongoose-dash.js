// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
        resp.render('add')
    });
    },
    
    find: function(req, res) {
    	Dog.find({_id: req.params.id}, (err,response)=>{
            if(err){console.log(err);}
            resp.render('edit', {dogs:response[0]})
        })
    });
    },
    find: function(req, res) {
        Dog.find({_id: req.params.id}, (err,response)=>{
            if(err){console.log(err);}
            resp.render('show', {dogs:response[0]})
        })
    });
    	
    },
    updateOne: function(req, res) {
    	Dog.updateOne({_id: req.params.id}, req.body, (err,response)=>{
            if(err){console.log(err);}
            resp.redirect(`/dogs/${req.params.id}`)
        })
    });
    },

    save: function(req, res) {
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
    },

    remove: function(req, res) {
        Dog.remove({_id: req.params.id}, req.body, (err,response)=>{
            if(err){console.log(err);}
            resp.redirect(`/`);
        })
    }
};