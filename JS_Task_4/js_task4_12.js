function randomNuber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNuber(1, 5));
