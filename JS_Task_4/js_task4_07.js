function insertWord(str, word, pos) {
    let strToArr = str.split(' ');
    strToArr.splice(pos + 1, 0, word);
    return strToArr.join(' ');
}

// test

console.log(insertWord('I am cool', 'very', 1));
