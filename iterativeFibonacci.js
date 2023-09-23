function iterativeFibonacci(num) {
  let array = [0, 1];

  for (let i = 2; i <= num; i++) {
    let fiboArray = array[i - 1] + array[i - 2];
    array.push(fiboArray);
  }
  return array;
}
