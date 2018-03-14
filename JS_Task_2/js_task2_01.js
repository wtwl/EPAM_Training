

function typeOfArg(input) {
    if(typeof input === 'number') {
        console.log('Это число');
    } else {
        console.log('Это строка');
    }
}



// tests

typeOfArg(5);
typeOfArg(25);
typeOfArg('25');
typeOfArg('string');
typeOfArg(255);