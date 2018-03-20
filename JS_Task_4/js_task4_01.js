function removeSpace(str) {
    return str.trim();
}

// function rmSpace(str) {
//     if(str[0] === ' ' && str[str.length - 1] === ' ') {
//         return str.slice(1, str.length);
//     } else if(str[0] === ' ') {
//         return str.slice(1);
//     } else if(str[str.length - 1] === ' ') {
//         return str.slice(0, str.length - 1);
//     }

// }

//test

console.log(rmSpace(' _abc_ '));
console.log(rmSpace(' _abc'));
console.log(rmSpace('abc_ '));