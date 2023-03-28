// give all fragrances that can be made with a given set of flowers

function fragrances(flowers) {
    const subsets = [''];
    for (const flower of flowers) {
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            const subset = subsets[j];
            subsets.push(subset + flower);
        }        
    }
    return subsets;
}

console.log(fragrances('abc'));
console.log(fragrances('abcd'));