function fizzBuzz(n) {
    var arr = [];
    for(var i=1; i<=n; i++) {
        arr[i] = i;
        if(!n > 0) {   
            return null;
        }
        console.log("this has worked");
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            arr[i] += "FizzBUzz";
        }
        if(i % 3 === 0 && i %5 !== 0) {
            console.log("Fizz");
            arr[i] += "Fizz";
        }
        if(i % 5 === 0 && i% 3 !== 0) {
            console.log("Buzz");
            arr[i] += "Buzz";
        }
         
    }
    return arr; 
}
fizzBuzz(15);