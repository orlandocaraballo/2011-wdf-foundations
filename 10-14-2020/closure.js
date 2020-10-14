// The following code is a factory function
//  that returns an object that stores a closure
function counterGenerator() {
  let internalCount = 0;

  function changeBy(value) {
    internalCount += value;
  }

  // Using this structure allows us to utilize changeBy
  //  within this function but not outside the function definition
  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => internalCount,
  };
}

const counter = counterGenerator();

console.log("Initial value counter is =>", counter.value());

// When we execute the increment function we are iterating
//  the value of internalCount by 1
counter.increment();
counter.increment();
counter.increment();

console.log("After several increments counter is =>", counter.value());

counter.decrement();

console.log("After one decrement counter is =>", counter.value());

console.log("-------------------------------------------");

// We can also keep track of two counters by creating another
//  counter object from the factory function
const anotherCounter = counterGenerator();

anotherCounter.increment();
anotherCounter.increment();
anotherCounter.increment();
anotherCounter.increment();
anotherCounter.increment();
anotherCounter.increment();

console.log("After 6 decrements anotherCounter is =>", anotherCounter.value());

console.log("-------------------------------------------");
