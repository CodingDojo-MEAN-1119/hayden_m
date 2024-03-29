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

            // name
            // health
            // speed
            // strength
            // Speed and strength should be 3 by default. Health should be 100 by default.

            // The Ninja class should have the following methods:

            // sayName() - This should log that Ninja's name to the console.
            // showStats() - This should show the Ninja's name, strength, speed, and health.
            // drinkSake() - This should add +10 health to the Ninja
        
            class Ninja {
                constructor() {
                    this.name = name;
                    this.health = 100;
                    this.speed = 3;
                    this.strength = 3;
                    
                }
                sayName() {
                    console.log(` My name is ${this.name} `);
                }
                showStats() {
                    console.log(` Name: ${this.name}, Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
                }
                drinkSake() {
                    this.health += 10;
                    console.log(` Sake adds +10 points to health: ${this.health} `);
                    return this;
                }
            }
            
            // Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 
            // 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute 
            // called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() 
            // should call the drinkSake() method from the Ninja class, before console.logging a wise message.
            
            class Sensei extends Ninja {
                constructor(name) {
                    super(name);
                    this.speed = 10;
                    this.strength = 10;
                    this.wisdom = 10;
                    this.health = 200;
		}

		speakWisdom() {
			super.drinkSake();
			console.log("If you eat enough hot dogs, \n you become a hot dog.");
		}

		showStats() {
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
		}
	}

	const senseiGuy = new Sensei("Captain Crunch");
	senseiGuy.speakWisdom();
	senseiGuy.showStats();
                
            

    </script>

</body>
</html>