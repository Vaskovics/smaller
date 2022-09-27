var largestDifference = function (data) {
    // TODO: Program solution
    let biggestDiff = {
        dataI: 0,
        dataJ: 0,
        diff: 0
    }
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let difference = 0;
            if (data[i] <= data[j]) {
                difference = j - i;
                console.log(difference);
                if (difference > biggestDiff.diff) {
                    biggestDiff.dataI = i;
                    biggestDiff.dataJ = j;
                    biggestDiff.diff = difference;
                };
            };
        };
    };
    return `data[${biggestDiff.dataI}] <= data[${biggestDiff.dataJ}] = ${biggestDiff.diff}`
};

const arr1 = [9, 4, 1, 10, 3, 4, 0, -1, -2];
console.log(largestDifference(arr1));