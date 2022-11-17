function getMiddle(s) {
    const word = s.split('')
    return word.length % 2 === 1 ? `${word[Math.ceil(word.length / 2 - 1)]}` : `${word[(word.length) / 2 - 1]}${word[((word.length) / 2) ]}`
}

console.log(getMiddle('test'))