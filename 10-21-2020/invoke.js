// Here we create our function constructor
//    and our prototype methods below
function Calculator() {
  this.value = 5;
}

Calculator.prototype.add = function () {
  this.value++;
};

const myCalculator = new Calculator();

myCalculator.add(); // 6

function invokeFunctionPassed(fnc) {
  fnc(); // runs the function being passed in;
  // what is the "this" reference in fnc?
}

// The following function will not iterate this.value because
//    this in the add function points to the global / window object as opposed to the Calculator
invokeFunctionPassed(myCalculator.add); // what is the argument?

// In order to actually be able to call add properly within
//    the invokeFunctionPassed function we would need to call the method
//    returned from the bind operation. Below we are binding myCalculator as the "this" for
//    the "add" function because it needs to have a correct reference to the myCalculator
//    when executed
invokeFunctionPassed.call(myCalculator, myCalculator.add.bind(myCalculator));
// Note: the code above ^ is quite atypical

console.log(myCalculator.value);
