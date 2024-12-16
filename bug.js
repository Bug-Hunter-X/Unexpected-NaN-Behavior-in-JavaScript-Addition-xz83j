function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null

// The problem is the unexpected behavior with NaN values.
console.log(foo(NaN, 2)); // Output: NaN
console.log(foo(1, NaN)); // Output: NaN
console.log(foo(NaN, NaN)); // Output: NaN