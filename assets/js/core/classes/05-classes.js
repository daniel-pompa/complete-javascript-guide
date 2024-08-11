//* Private Properties
// Private properties are declared using the # symbol.
// These properties are only accessible within the class.
// They cannot be accessed or modified from outside the class.

console.log('%cClasses with Private Properties', 'color: #1e3a8a; font-weight: bold;');

/**
 * Defines the Shape class.
 * @class
 * @throws {TypeError} Cannot construct Shape instances directly.
 */
class Shape {
  /**
   * Private property to store the area.
   * @type {number}
   * @private
   */
  #area;

  constructor() {
    if (new.target === Shape) {
      throw new TypeError('Cannot construct Shape instances directly.');
    }
  }

  /**
   * Sets the area of the shape.
   * @param {number} value - The area to set.
   * @throws {Error} The area cannot be negative.
   * @protected
   */
  _setArea(value) {
    if (value < 0) {
      throw new Error('Area cannot be negative.');
    }
    this.#area = value;
  }

  /**
   * Gets the area of the shape.
   * @returns {number} The area of the shape.
   */
  getArea() {
    return this.#area;
  }
}

/**
 * Defines the Square class that extends Shape.
 * @class
 * @extends {Shape}
 * @throws {Error} The side length cannot be negative.
 */
class Square extends Shape {
  /**
   * Creates a square.
   * @param {number} sideLength - The length of the square's side.
   * @throws {Error} The side length cannot be negative.
   */
  constructor(sideLength = 0) {
    super();
    if (sideLength < 0) {
      throw new Error('The side length of the square cannot be negative.');
    }
    this.sideLength = sideLength;
    this._setArea(Math.pow(this.sideLength, 2)); // Calculate and assign the area to the private property
  }
}

/**
 * Defines the Rectangle class that extends Shape.
 * @class
 * @extends {Shape}
 * @throws {Error} The width and height cannot be negative.
 */
class Rectangle extends Shape {
  /**
   * Creates a rectangle.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @throws {Error} The width and height cannot be negative.
   */
  constructor(width = 0, height = 0) {
    super();
    if (width < 0 || height < 0) {
      throw new Error('The width and height of the rectangle cannot be negative.');
    }
    this.width = width;
    this.height = height;
    this._setArea(width * height); // Calculate and assign the area to the private property
  }
}

/**
 * Defines the Triangle class that extends Shape.
 * @class
 * @extends {Shape}
 * @throws {Error} The base and height cannot be negative.
 */
class Triangle extends Shape {
  /**
   * Creates a triangle.
   * @param {number} baseLength - The base of the triangle.
   * @param {number} height - The height of the triangle.
   * @throws {Error} The base and height cannot be negative.
   */
  constructor(baseLength = 0, height = 0) {
    super();
    if (baseLength < 0 || height < 0) {
      throw new Error('The base and height of the triangle cannot be negative.');
    }
    this.baseLength = baseLength;
    this.height = height;
    this._setArea((baseLength * height) / 2); // Calculate and assign the area to the private property
  }
}

/**
 * Defines the Circle class that extends Shape.
 * @class
 * @extends {Shape}
 * @throws {Error} The radius cannot be negative.
 */
class Circle extends Shape {
  /**
   * Creates a circle.
   * @param {number} radius - The radius of the circle.
   * @throws {Error} The radius cannot be negative.
   */
  constructor(radius = 0) {
    super();
    if (radius < 0) {
      throw new Error('The radius of the circle cannot be negative.');
    }
    this.radius = radius;
    this._setArea(Math.PI * Math.pow(radius, 2)); // Calculate and assign the area to the private property
  }
}

// Test the created classes
console.log('%cInstance of the Square class', 'color: #1e3a8a; font-weight: bold;');
// Create an instance of the Square class
const square = new Square(4);
console.log(square);
console.log('Square area:', square.getArea());

console.log('%cInstance of the Rectangle class', 'color: #1e3a8a; font-weight: bold;');
// Create an instance of the Rectangle class
const rectangle = new Rectangle(4, 5);
console.log(rectangle);
console.log('Rectangle area:', rectangle.getArea());

console.log('%cInstance of the Triangle class', 'color: #1e3a8a; font-weight: bold;');
// Create an instance of the Triangle class
const triangle = new Triangle(4, 5);
console.log(triangle);
console.log('Triangle area:', triangle.getArea());

console.log('%cInstance of the Circle class', 'color: #1e3a8a; font-weight: bold;');
// Create an instance of the Circle class
const circle = new Circle(3);
console.log(circle);
console.log('Circle area:', circle.getArea());
