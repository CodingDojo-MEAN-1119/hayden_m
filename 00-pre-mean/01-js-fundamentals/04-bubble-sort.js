function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));

// Classify each of the following functions according to their Big O Time complexity:

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// Big O complexity: 
function findNth(arr, n){
    console.log(arr[n]);
}
// Big O complexity: 
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
// Big O complexity: 
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// Big O complexity: 