export const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

export function keys(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

export function values(obj) {
  const arr = [];
  for(let key in obj){
    arr.push(obj[key]);
  }
  return arr;
}

export function mapObject(obj, cb) {
  const object = {};
  for(let key in obj){
    object[key] = cb(obj[key]);
  }
  return object;
}

export function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
}

/* STRETCH PROBLEMS */

export function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}

export function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}

