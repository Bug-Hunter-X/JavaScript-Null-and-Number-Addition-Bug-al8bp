# JavaScript Null and Number Addition Bug

This repository demonstrates a common error in JavaScript related to adding numbers and null values. The code attempts to handle null inputs by returning 0 if either input is null, but this might not behave as expected due to JavaScript's type coercion rules.

## Bug Description
The `foo` function is intended to add two numbers. It handles null values by returning 0. However, the way the addition is performed can lead to unexpected results when one of the values is null. JavaScript treats null as 0 during numerical addition.  However, this is implicit type coercion, and may cause unexpected results in a larger context.

## Solution
The solution ensures that both values are numbers before performing the addition operation to prevent type coercion issues.