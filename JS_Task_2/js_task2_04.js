

function isSame(arr) {
    var start = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(start != arr[i]) return false;
    } 

    return true;
}




// tests

console.log(isSame([1,1,1]));
console.log(isSame([1,1,2]));
console.log(isSame([2, 2, 2, 2, 2, 2, 2, 2]));
console.log(isSame([2, 2, 2, 2, 3, 2, 2, 2]));