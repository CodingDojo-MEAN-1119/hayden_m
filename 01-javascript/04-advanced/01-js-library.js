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
    
        function each(arr, callback) {
        for(var i = 0; i < arr.length; i++) {
            callback(arr[i]); 
            }
        }
        const _ = {
            map: function(array, callback) {
                for (let i = 0; i < array.length; i++) {
                array[i] = callback(array[i]);
                }
            },
            reduce: function(array, callback, memo){
                let el = 0;
                if (!memo){
                    memo = array[0];
                    el = 1;
                }
                for (let i = el; i < array.length; i++) {
                    memo = callback(array[i], memo);
                }
                return memo;

            },
            find: function(array, callback) {
                for (let i = 0; i < array.length; i++) {
                if (callback(array[i])){
                    return array[i];
                }
                }
            },
            filter: function(array, callback) {
                const tempArray = [];
                for (let i = 0; i < array.length; i++) {
                if (callback(array[i])) {
                    tempArray.push(array[i]);
                }
                }
                // we could also modify the original array
                return tempArray;
            },
            reject: function(array, callback) {
                const tempArray = [];
                for (let i = 0; i < array.length; i++) {
                if (!callback(array[i])) {
                    tempArray.push(array[i]);
                }
                }
                // we could also modify the original array
                return tempArray;
            },
    }

const array = [3, 4, 5];
_.map(array, function callback(x) { return x * 5; });
console.log(array);
console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
console.log(_.find(array, function callback(x) { return x === 15; }));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
console.log(_.filter(array, function(x) { return x > 20; }));

    </script>

</body>
</html>