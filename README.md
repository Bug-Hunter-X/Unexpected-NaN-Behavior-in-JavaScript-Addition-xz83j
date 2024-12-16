# Unexpected NaN Behavior in JavaScript Addition

This repository demonstrates an example of unexpected behavior when dealing with NaN (Not a Number) values in JavaScript.  The `foo` function correctly handles null input values but does not explicitly handle NaN, leading to unexpected NaN outputs when NaN is involved in the addition.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a potential solution to improve the handling of NaN values.

## Bug Description
The provided JavaScript code demonstrates a common issue with NaN (Not a Number) values.  The function handles null values correctly but doesn't handle NaN appropriately. Adding NaN to any number (or NaN itself) always results in NaN.  This unexpected behavior can lead to unexpected results if not handled correctly in applications.

## Solution
The solution involves adding a check for NaN values, which provides a more robust and predictable function.