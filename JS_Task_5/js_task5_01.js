const Calculator = {};

Calculator.currentState = 0;


Calculator.getResult = function() {
    return this.currentState;
}

Calculator.add = function(num) {
     this.currentState += num;
}

Calculator.subtract = function(num) {
    this.currentState -= num;
}

Calculator.divide = function(num) {
    this.currentState /= num;
}

Calculator.multiply = function(num) {
    this.currentState *= num;
}

Calculator.reset = function() {
    this.currentState = 0;
}

// test

Calculator.add(5);
Calculator.multiply(5);
console.log(Calculator.getResult());
Calculator.reset();
console.log(Calculator.getResult());
