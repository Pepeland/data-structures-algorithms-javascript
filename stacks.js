function reverseStr(str) {
    const stack = [];

    str.split('').forEach((char) => stack.push(char));
    str = "";
    while (stack.length !== 0)
        str += stack.pop();
    return str;
}

function checkBalanceExpressions(str) {
    const stack = [];
    let balance = true;

    str.split('').forEach((char) => {
        if ("(<[{".includes(char))
            stack.push(char);
        else if (")>]}".includes(char)) {
            if (stack.length === 0)
                balance = false;
            else
                if(")>]}".indexOf(char) !== "(<[{".indexOf(stack.pop())) balance = false;
        }
    });

    if (!balance) return false;
    return stack.length === 0;
}

// console.log(reverseStr("abcd"));
console.log(checkBalanceExpressions("([<1+2>])"));