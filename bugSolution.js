function foo(a, b) {
  // Explicitly convert to numbers before addition to avoid type coercion issues.
  a = Number(a) || 0; 
  b = Number(b) || 0;
  return a + b;
}