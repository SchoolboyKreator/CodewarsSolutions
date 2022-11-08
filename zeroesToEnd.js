function moveZeros(arr) {
  const res = arr.map((elem) => {});
  if (elem === 0) {
    res.push(0);
    res.splice(elem, 1);
  }
  return res;
}

console.log(moveZeros([false, 1, 1, 0, 1, 2, 0, 1, 3, "a"]));
