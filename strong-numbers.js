function strong(n) {
    let strNumbers = (n.toString()).split('');
    function fact(n) {
        if (n <= 1) {
            return 1;
        } else {
            return fact(n - 1) * n;
        }
    }
    let resultArr = strNumbers.map(number => fact(number));
    const sumOfArr = resultArr.reduce((a, b) => a + b, 0);
    return sumOfArr == n ? "STRONG!!!!" : "Not Strong !!";
}
console.log(strong(3422342123));
