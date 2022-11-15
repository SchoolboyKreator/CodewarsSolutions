function DNAStrand(dna){
    //your code here
    return dna.split('').map( elem => {
        if (elem === 'A') {
            return 'T'
        }
        if (elem === 'T') {
            return 'A'
        }
        if (elem === 'C') {
            return 'G'
        }
        if (elem === 'G') {
            return 'C'
        }
    }).join('')
}

console.log(DNAStrand('ATTGC'))