function findProperty(prop, obj) {
    for(var key in obj) {
        if(prop === key) return true;
    }
    return false;
}





// test 

var user = {
	name: 'Andrei',
	surname: 'Ivanov',
	age: 18,
	position: 'develop'
}


console.log(findProperty('name', user));
console.log(findProperty('kids', user));
console.log(findProperty('position', user));
console.log(findProperty('age', user));
console.log(findProperty('salary', user));
