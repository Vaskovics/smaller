var box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon';
var box2 = 'monme mon mon monme';
var box3 = 'mon mon mon';
function buyTofu(cost, box) {
    //your code here
    let countMonme = 0;
    let countMon = 0;
    const arr = box.split(" ");
    for (let item of arr) {
        if (item === 'monme') {
            countMonme += 1;
        } else if (item === 'mon') {
            countMon += 1;
        }
    };
    const minMonmeCoins = Math.floor(cost / 60);
    const monmeCoinChange = countMonme >= minMonmeCoins ? minMonmeCoins : countMonme;
    console.log(monmeCoinChange);
    let monCoinChange = 0;

    if ((cost - monmeCoinChange * 60) > countMon) {
        return 'leaving the market';
    } else {
        monCoinChange = cost - monmeCoinChange * 60;
        if (monCoinChange < (cost - monmeCoinChange * 60)) {
            return 'leaving the market';
        }
    };
    console.log('monme:', monmeCoinChange, 'mon:', monCoinChange);

    const minCoinsNeeded = monmeCoinChange + monCoinChange;

    const totalAmount = countMonme * 60 + countMon;
    const result = [countMon, countMonme, totalAmount, minCoinsNeeded];
    return result;
}

console.log(buyTofu(674, box3));