// Max profit in knapsack problem

// brute force with recursion
function ks(products, w, n = 0) {
    if(n == products.length || w == 0) return 0;
    const currentItem = products[n];
    
    if(currentItem[0] > w) return ks(products, w, n+1);

    return Math.max(ks(products, w - currentItem[0], n+1) + currentItem[1], ks(products, w, n+1));
}

// brute force with iteration
function ks_brute_force(products, w, n = 0) {
    const subsets = [[[0,0]]];
    for (const product of products) {
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            const subset = subsets[j];
            const newSubset = [...subset, product];
            subsets.push(newSubset);
        }   
    }

    let max = 0;
    for (const subset of subsets) {
        currentValue = 0;
        currentWeight = 0;
        for (const item of subset) {
            currentWeight += item[0];
            currentValue += item[1];
        }
        if(currentWeight <= w && currentValue > max) max = currentValue;
    }
    return max;
}

// knapsack using recursion and memoaization
function ks_memo(products, w, n = 0, memo = {}) {
    if(n == products.length || w == 0) return 0;
    const currentItem = products[n];
    const key = currentItem[0] + "," + currentItem[1] + "," + w;
    if(key in memo) return memo[key];

    if(currentItem[0] > w) return ks_memo(products, w, n+1, memo);
    const maxThisWay = Math.max(ks_memo(products, w - currentItem[0], n+1, memo) + currentItem[1], ks_memo(products, w, n+1, memo));
    memo[key] = maxThisWay;
    return maxThisWay;
}

console.log("cases by knapsack throw recursion:")
console.log(ks([[3,6],[2,8],[4,7]], 8)); // 15
console.log(ks([[2,1],[3,4],[6,5],[7,6]], 10)); // 10
console.log(ks([[2,1],[3,4],[6,5],[9,6]], 11)); // 10
console.log(ks([[2,1],[3,4],[6,5],[9,6],[1,3],[4,9],[5,12],[7,3],[8,5],[10,7],[2,7],[11,5],[12,2],[13,8],[14,3],[15,10],[16,3],[17,11],[18,15],[19,3],[20,13]], 17)); // 10
console.log('');

console.log("cases by knapsack throw memoization:")
console.log(ks_memo([[3,6],[2,8],[4,7]], 8)); // 15
console.log(ks_memo([[2,1],[3,4],[6,5],[7,6]], 10)); // 10
console.log(ks_memo([[2,1],[3,4],[6,5],[9,6]], 11)); // 10
console.log(ks_memo([[2,1],[3,4],[6,5],[9,6],[1,3],[4,9],[5,12],[7,3],[8,5],[10,7],[2,7],[11,5],[12,2],[13,8],[14,3],[15,10],[16,3],[17,11],[18,15],[19,3],[20,13]], 17)); // 10
console.log('');

console.log("cases by knapsack throw iteration:")
console.log(ks_brute_force([[3,6],[2,8],[4,7]], 8)); // 10
console.log(ks_brute_force([[2,1],[3,4],[6,5],[7,6]], 10)); // 10
console.log(ks_brute_force([[2,1],[3,4],[6,5],[9,6]], 11)); // 10
console.log(ks_brute_force([[2,1],[3,4],[6,5],[9,6],[1,3],[4,9],[5,12],[7,3],[8,5],[10,7],[2,7],[11,5],[12,2],[13,8],[14,3],[15,10],[16,3],[17,11],[18,15],[19,3],[20,13]], 17)); // 10
console.log('');