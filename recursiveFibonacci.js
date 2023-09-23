function recursiveFibonacci(n) {
  //BASE CASE:
  if (n <= 1) {
    return [0, 1];
  }

  //Recursive case:
  let array = recursiveFibonacci(n - 1);

  array.push(array[array.length - 1] + array[array.length - 2]);

  return array;
}
