class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  // The function below produces a closure where we have access to
  //    the value of i outside of the scope of the generateDrawFunction
  generateDrawFunction() {
    const i = 30;

    const drawer = () => {
      console.log(
        `I am going to draw ${i} within the circle with radius of -> ${this.radius}`
      );
    };

    return drawer;
  }
}

const myCircle = new Circle(10);

// we execute our method and this returns a function
const drawer = myCircle.generateDrawFunction();

// This function will still have the ability to properly retrieve
//    the value of i outside of its scope above
drawer();
