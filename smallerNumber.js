function nextSmaller(n) {
    const positiveIntegers = [];
    console.log(n);

    for (let i = 0; i < n; i++) {
        let strNum = i.toString().split("");

        positiveIntegers.push(strNum);
    }
    let result = "";
    const strN = n.toString().split('').sort();
    for (let i = positiveIntegers.length - 1; i >= 0; i--) {

        let sortedArr = [...positiveIntegers[i]].sort();
        //console.log(sortedArr, JSON.stringify(strN));
        if (JSON.stringify(sortedArr) === JSON.stringify(strN)) {
            console.log(positiveIntegers[i]);
            return Number(positiveIntegers[i].join(""));
        }
    }
    return -1;
}

console.log(nextSmaller(123456798));
// let a = ['2', '1', '3'].sort();
// let b = ['1', '2', '3'];
// console.log(a == b);
// console.log(JSON.stringify(a) === JSON.stringify(b));