

function arrayIterate(arr) {
    
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('Число элементов: ' + arr.length);
}




// tests

arrayIterate([2, 4, 5, 6, 7, 8]);
arrayIterate([1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]);