// Write a function that takes an array of numbers as a parameter. Find the maximum number, 
//the minimum number, and the average of all the numbers in the array. 
//Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function min_max_avg(arr) {
    var sum = 0;
    var min = 0;
    var max = 0;
    
      for(var i=0; i<arr.lenght; i++) {
          if(i < min) {
              min = min + arr[i];
          }
          if(i > max) {
              max = max + arr[i];
          }
          sum = sum + 1;        
      }
      var avg = sum/arr.length;
      return avg;
  
  }
  
  min_max_avg([1,2,3,4,7]);