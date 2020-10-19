const dan = "dan";

// "Normal" function with if/else statements
const isDan = (name) => {
  if (name === "dan") {
    return "This is dan";
  } else {
    return "nope";
  }
};

// One step beyond, ternary with brackets
const isDan = (name) => {
  return name === "dan" ? "This is dan" : "nope";
};

// FANCY VERSION/One Liner
// IS STATEMENT TRUTHY ? YES : NO
const isDan = (name) => (name === "dan" ? "This is dan" : "nope");

isDan(dan);
