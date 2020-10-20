const array = [1, 2, 3, 4, 5];

// this code and the code below are equivalent
array.forEach((element) => console.log(array[i]));

// This code is more efficient because we do not have the extra overhead
//  from our forEach statement above, however its at the cost of readability
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}

// map -> loops thru an array and transforms it into a new array with hits values multiplied by 3
const mappedArray = array.map((element) => element * 3);

// filter -> loops thru an array and filters out elements that match the conditional
//    - in this case its filtering out values that are event
const filteredArray = array.filter((element) => element % 2 === 0);

// reduce -> loops thru an array and outputs one thing as its return value
//  Below we are:
//    - setting the initial value of the accumulator to {} (an empty object)
//    - taking the accumulator object and filling it with the values from the array
//    - storing that output in the accumulator object
const reducedValue = array.reduce((accumulator, element, index) => {
  accumulator[`key-${index}`] = element;
  return accumulator;
}, {});

console.log(filteredArray);
