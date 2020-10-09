// This factory function creates a new object
//    with the keys name, gender and nameAndGender
//    the last of which is a function
function dogFactory(name, gender) {
  // some other code here

  return {
    name: name,
    gender: gender,
    nameAndGender: function () {
      return `${name} : ${gender}`;
    },
  };
}

// The downside of the above approach is that we
//    create a new function every time. The solution to this
//    problem is to add nameAndGender to the prototype like so:
Dog.prototype.nameAndGender = function () {
  return `${this.name} : ${this.gender}`;
};

//  This ensures that we create the function once and any
//    functions with the Dog prototype will acquire the same
//    behavior.

//  The following the Dog function constructor
//    which behaves similar to the factory but must be
//    initialized using new operator.
function Dog(name, gender) {
  this.name = name;
  this.gender = gender;
}

// notice the difference in how we use dogFactory
//    vs the Dog function constructor
const salmon = dogFactory("salmon", "female");
const optimusPrime = new Dog("Optimus Prime", "female");
const max = new Dog("max", "non-binary");

// each of these should display the objects information
//    along with its methods
console.log(salmon, optimusPrime, max);
