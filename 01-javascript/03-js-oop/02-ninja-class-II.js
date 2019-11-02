<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ninja Class II</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
</head>
<body>

    <script type="text/javascript">

            function Ninja(name) {
                    this.name = name;
                    this.health = 100;
                    var speed = 3;
                    var strength = 3;
                    
        
                this.showStats = function () {
                    console.log("Ninja Name: " + this.name + "Ninja Health:" + this.health + "Speed: " + speed + "Strength: " + strength);
                    return this;
                }
                this.kick = function(ninja) {
				const damage = strength * 5;
				ninja.health -= damage;
				console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
				return this;
                    }
                }

                Ninja.prototype.punch = function(ninja) {
                    ninja.health -= 5;
                    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
                    return this;
                }

                Ninja.prototype.sayName = function() {
                    console.log("My name is " + this.name);
                    return this; 
                }

                Ninja.prototype.drinkSake = function() {
                    this.health += 10;
                    console.log("Sake adds +10 health: " + this.health);
                    return this;
                }

            const newNinja = new Ninja("Hayden");
            const otherNinja = new Ninja("Jeff");
            newNinja.sayName();
            newNinja.showStats();
            newNinja.drinkSake();

            newNinja.sayName();
		    otherNinja.sayName();

            newNinja.punch(otherNinja);
            otherNinja.kick(newNinja);
            newNinja.showStats();
            otherNinja.showStats();
            

            newNinja.showStats();
            otherNinja.showStats();

    </script>
</body>
</html>