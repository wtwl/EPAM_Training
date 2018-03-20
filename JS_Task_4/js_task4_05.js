function trunc(str, num) {
    if(str.length > num) {
        return str.slice(0, num -3) + '...';
    }
    return str;
} 


// test


console.log(trunc('abcdefg', 5));
console.log(trunc('lorem ipsum', 6));
