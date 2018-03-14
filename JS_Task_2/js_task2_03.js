

function evenOddCount(arr) {
    var evenCounter, oddCounter, zeroCounter, i;
    evenCounter = oddCounter = zeroCounter = 0;
   
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            zeroCounter++;
        } else if (arr[i] % 2 == 0) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }


    if(zeroCounter) {
        console.log('четных: ' + evenCounter + '; нечентых: ' + oddCounter + '; нуль: ' + zeroCounter);
    } else {
        console.log('четных: ' + evenCounter + '; нечентых: ' + oddCounter);
    }

}



// tests

evenOddCount([1,2,3,0]);
evenOddCount([1,2,3,4]);
