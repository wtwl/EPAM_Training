

function capitalizeAll(str) {
    let strToArr = str.split(" ");
    let capitalized = strToArr.map(function(x) {
        return x[0].toUpperCase() + x.slice(1);
    }).join(' ');

    return capitalized;
}

// test

console.log(capitalizeAll('i am cool'));
console.log(capitalizeAll('aaa aaaa aaa a aa aaaaaa'));
