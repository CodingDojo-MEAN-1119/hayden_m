<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Nina Class</title>
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
            newNinja.sayName();
            newNinja.showStats();
            newNinja.drinkSake();


    </script>

</body>
</html>