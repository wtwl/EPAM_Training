function findSubStr(str, sub) {
    if(str.indexOf(sub) !== -1) {
        return true;
    }
    return false;
}

// test 

console.log(findSubStr('i love cats', 'cats'));
console.log(findSubStr('i love cats', 'cets'));
