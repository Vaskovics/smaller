function sortArray(array) {
    // Return a sorted array.
    const oddNumbers = [];
    const resultArr = [];
    for (let num of array) {
        if (num % 2 === 0) {

        } else {
            oddNumbers.push(num);
        }
    }
    const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);
    console.log(sortedOddNumbers);
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultArr.push(array[i]);
        } else {
            resultArr.push(oddNumbers[j]);
            j++;

        }
    }
    console.log(resultArr);
    return resultArr;
}

sortArray([5, 3, 2, 8, 1, 4]);