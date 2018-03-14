

function stringToNumber(arr) {
    
    for(var i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }

    return arr;
}

// tests 

console.log(stringToNumber([1, 2, '3', '10']));
console.log(stringToNumber(['1', '2', '3', '4', '5', '6', '7']));

