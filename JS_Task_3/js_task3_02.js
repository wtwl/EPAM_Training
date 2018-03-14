function iterateObj(obj) {
    for(var key in obj) {
        console.log(key + ': ' + obj[key]); 
    }
}



// test

var user = {
	name: 'Andrei',
	surname: 'Ivanov',
	age: 18,
	position: 'develop'
}


iterateObj(user);