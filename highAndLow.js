function highAndLow(numbers){
    const arr = numbers.split(' ')
    const lowest = arr.sort((a,b) => a - b)[0]
    const highest = arr.sort((a,b) => a - b)[arr.length - 1]
    return (`${highest} ${lowest}`)
}

console.log(highAndLow("1 2 3 4 5"))