// fib sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// time: O(2^n), space: O(n)
function getNthFib_recursion(n) {
    return n < 3 ? n - 1 : getNthFib_recursion(n - 1) + getNthFib_recursion(n - 2);
}

// time: O(n), space: O(1)
function getNthFib_loop(n) {
    let lastTwo = [0, 1];
    let sum = 1;
    if(n < 3) return n - 1;

    for (let i = 3; i <= n; i++) {        
        sum = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = sum;
    }    

    return sum;
}

// time: O(n), space: O(n)
function getNthFib_dynamic(n, fibMap = {1:0, 2:1}) {
    if(n in fibMap) return fibMap[n];
    fibMap[n] = getNthFib_dynamic(n - 1, fibMap) + getNthFib_dynamic(n - 2, fibMap);
    return fibMap[n];
}

// console.log(getNthFib_recursion(6) + ", " + getNthFib_recursion(8)); // 5, 13
// console.log(getNthFib_loop(6) + ", " + getNthFib_loop(8)); // 5, 13
console.log(getNthFib_dynamic(6) + ", " + getNthFib_dynamic(8)); // 5, 13