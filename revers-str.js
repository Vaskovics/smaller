function spinWords(string) {
    //TODO Have fun :)
    let arrStr = string.split(" ");
    let reversedArr = [];
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length >= 5) {
            let currentWord = "";
            for (let j = arrStr[i].length; j--;) {
                currentWord += arrStr[i][j];
            }
            reversedArr.push(currentWord);
        } else {
            reversedArr.push(arrStr[i]);
        }
    }
    return reversedArr.join(' ');
}



console.log(spinWords('You are almost to the last test'))