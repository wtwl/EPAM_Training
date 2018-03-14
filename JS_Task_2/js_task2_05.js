

function maxNum(arr) {
    var max = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}



// tests 

console.log(maxNum([9,3,45]));
console.log(maxNum([100, 200, 5, 500, 1, 600, 3]));
console.log(maxNum([7, 8, 6, 2, 1]));
