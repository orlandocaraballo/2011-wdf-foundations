// this will work
console.log(func2(10, 11));

// this will crash
console.log(func1(20, 21));

// writing a function in this style makes it
//  non-invokeable before its definition
const func1 = function (a, b) {
  return a + b;
};

// writing a function in this style makes it so that you
//  can invoke it before its defined (this is called hoisting)
function func2(a, b) {
  return a + b;
}
