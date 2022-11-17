function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    let c = arr[0]
    arr.shift()
    return c;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

console.log(nextInLine(testArr, 6))