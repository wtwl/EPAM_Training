function cloneObj(obj) {
    var copiedObj = {};
    for(var prop in obj) {
        copiedObj[prop] = obj[prop];
    }

    return copiedObj;
}






// test

// var user = {
// 	name: 'Andrei',
// 	surname: 'Ivanov',
// 	age: 18,
// 	position: 'develop'
// }

// var copiedUser = cloneObj(user);
// console.log(copiedUser);
// user.age = 19;
// console.log(user);
// console.log(copiedUser);
