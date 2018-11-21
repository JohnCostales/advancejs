const hypotenuse = (a, b) => {

  const square = x => x * x;
  return Math.sqrt(square(a) + square(b));
}

// const square = x => x * x;
// const hypotenuse = (a, b) => Math.sqrt(square(a) + square(b));

console.log(hypotenuse(4,5));
