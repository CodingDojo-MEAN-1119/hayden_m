// properties attributes: price, max_speed, miles
// 3 instances of Bike class
// 3 functions: 

// displayInfo() -  have this method display the bike's price, 
//maximum speed, and the total miles 

// ride() - have it display "Riding" on 
// the screen and increase the total miles ridden by 10

// reverse() -  have it display "Reversing" on 
// the screen and decrease the total miles ridden by 5...

  
class Bike {
    constructor(
        public price: number,
        public speed: number,
        public miles: number,
        ) {}
    displayInfo(){
        console.log(`Price: ${this.price}, Top Speed: ${this.speed}, Miles: ${this.miles}.`);
        return this;
    }
    ride(){
        this.miles += 10;
        console.log("Riding!");
        return this;
    }
    reverse() {
            this.miles -= 5;
            console.log("Reversing!");
            return this;
    }
}
const bike1 = new Bike(100, 50, 5000);
const bike2 = new Bike(200, 50, 20);
const bike3 = new Bike(300, 50, 500);

bike1.ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().displayInfo();
bike3.ride().ride().reverse().displayInfo();