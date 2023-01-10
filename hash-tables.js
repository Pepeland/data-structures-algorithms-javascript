// find first non-repeated character

function findFirstNonRepeatedCharacter(str) {
    let chars = str.split('');
    const dic = {};
    chars.forEach((c) => {
        if (!dic[c]) dic[c] = 1;
        else
            dic[c] += 1;
    });

    try {
        chars.forEach((c) => {
            if (dic[c] === 1) {
                console.log("The first non-repeated character is: " + c)
                throw "BreakException";
            }
        });
    } catch (e) {
        if (e !== "BreakException") throw e;
    }
}

function findFirstRepeatedCharacter(str) {
    let chars = str.split('');
    const dic = {};
    try{
    chars.forEach((c) => {
        if (dic[c]) {
            console.log("The first repeated character is: " + c)
            throw "BreakException";
        }
        else
            dic[c] = true;
    });
    console.log("none of the characters are repeated.")
    } catch (e) {
        if (e !== "BreakException") throw e;
    }
}

findFirstNonRepeatedCharacter("a green apple");
findFirstRepeatedCharacter("hamid reza");