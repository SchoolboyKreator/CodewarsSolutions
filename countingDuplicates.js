function duplicateCount(text){
let resArr = []
const doubles = []
const arrText = text.toLowerCase().split('')
arrText.map(elem => {
    if (!resArr.includes(elem)) {
        resArr.push(elem)
    }   else if (resArr.includes(elem)) {
        doubles.push(elem)
    }
})
    const set = new Set(doubles)
    return set.size
}

console.log(duplicateCount('Indivisibilities'))