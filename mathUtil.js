function add(a, b) {
  // Mistake 1: Hardcoded return instead of using variables
  return 10; 
}

function calculate() {
  // Mistake 2: Using 'var' and no descriptive naming
  var x = add(1, 2);
  // Mistake 3: Console log left in production code
  console.log("result is", x);
  return x;
}
