// person to set initial data on
const defaultPerson = {
  name: "Orlando C",
  age: 36,
  car: {
    make: "Mazda",
    model: "CX-5",
    somethingElse: {
      someValue: 4,
      someArray: [1, 2, 3],
    },
  },
};

// new person to copy data from above
const newPerson = {
  ...defaultPerson, // all data from defaultPerson is copied
  birthday: "December 1", // because this is a new property, it will be added to this object
  name: "Denisse", // here we override the name property set above with a new value
};

const array1 = [1, 2, 3];
const array3 = [45, 2, -3, 3, 55];
const array2 = [-98, ...array3, ...array1, 4];
const array4 = [...array1, ...array3];

const multiDimensionalArray = [
  [-3, -2, -1],
  [1, 2, 3],
  [
    [4, 5, 6],
    [7, 8, 9],
  ],
];

const newMultiDimensionaArray = [...multiDimensionalArray];

console.log("This is the person: ", defaultPerson);
console.log("This is the other person: ", newPerson);

console.log("This is array 1: ", array1);
console.log("This is array 2: ", array2);
console.log("This is array 4: ", array4);
console.log("This is the multi array:", newMultiDimensionaArray);
