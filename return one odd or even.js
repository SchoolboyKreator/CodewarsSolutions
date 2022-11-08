function findOutlier(integers) {
    const odd = integers.filter(item => Math.abs(item) % 2 === 1)
    const even = integers.filter(item => Math.abs(item) % 2 === 0)
    if (odd.length < even.length) {
        return odd[0]
    } else return even[0]
}

console.log(findOutlier([135352372,-196785934,-132153940,-75272922,-162063624,19084256,-84992843,-27983222,34216934,4265522]))