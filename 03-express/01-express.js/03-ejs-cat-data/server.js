const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
var catsArray = [
    {name: "Meatbol", image: "/images/maxresdefault.jpg", description: "never gets any help", favFood: "hot dogs", age: "4"}, 
    {name: "Toast", image: "/images/raw.png", description: "types fast", favFood: "hot dogs", age: "4"}, 
    {name: "Smudge", image: "/images/smudgey.jpg", description: "likes to judge people at the table", favFood: "Pancakes", age: "5"},
    {name: "Spaghetti", image: "/images/spaghetti.jpg", description: "likes to zoom around", favFood: "Meat Balls", age: "3"},

];
app.get('/', (request, response) => {
   response.render('cats');
});

app.get("/cats/:cat_index", (request, response) => {
        var catIndex = request.params.cat_index;
        const cat = catsArray[catIndex];
        console.log(cat); 
        console.log(catIndex);

        response.render('showcat', {cat: cat});
});
app.listen(8000);