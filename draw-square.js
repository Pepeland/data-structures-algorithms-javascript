function drawSquare(size) {
    let currentLine = '';
    for(let i = 0; i < size; i++) {
        currentLine = currentLine + "*  ";
    }
    console.log(currentLine);

    for (let i = 0; i < size - 2; i++) {
        currentLine = '* ';
        for (let j = 0; j < size - 2; j++) {
            currentLine += '   ';
        }
        currentLine += ' *';
        console.log(currentLine);
    }

    currentLine = '';
    for(let i = 0; i < size; i++) {
        currentLine = currentLine + "*  ";
    }
    console.log(currentLine);
}

drawSquare(4);