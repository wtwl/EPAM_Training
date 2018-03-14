function addProperty(prop, obj) {
        if(!obj.hasOwnProperty(prop)) {
            obj[prop] = 'new';
        }
    return obj;
}



// test


var user = {
	name: 'Andrei',
	surname: 'Ivanov',
	age: 18,
	position: 'develop'
}


console.log(addProperty('boo', user));
