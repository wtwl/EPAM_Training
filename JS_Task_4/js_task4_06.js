function toCamelCase(str) {
    let strToArr = str.split(" ");
    let camelCased = strToArr.map(function(x, index) {
        if(index === 0) {
            return x.toLowerCase()
        }
        return x[0].toUpperCase() + x.slice(1);
    }).join('');

    return camelCased;
}

// test

console.log(toCamelCase('User Object'));

console.log(toCamelCase('i am cool'));
console.log(toCamelCase('string in camel case'));