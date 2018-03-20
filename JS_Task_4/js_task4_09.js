function letterCount(str) {
    let counter = {};
    for(var i = 0; i < str.length; i++) {
        if(!counter.hasOwnProperty(str[i])) {
            counter[str[i]] = 0;
        }
        counter[str[i]]++
    }

    for(letter in counter) {
        console.log(letter, ':', counter[letter]);
    }

}

letterCount('abaaababbccc');