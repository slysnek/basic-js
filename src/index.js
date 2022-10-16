/* function getDNSStats(domains) {
    let changedDomains = []
    for (const domain in domains) {
        let newEL = domains[domain].split('.')
        newEL.reverse();
        changedDomains.push(newEL)
    }
    let domainCount = {}
    console.log(changedDomains);
    for (let arr of changedDomains){
        for(let word of arr){
            domainCount[word] = 0;
        }
    }
    console.log(domainCount);
}

let result = getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
console.log(result); */
function minesweeper(matrix) {
    let minesweeperField = [
        [],
        [],
        []
    ]
    let count = 0;
    if(matrix.length < 3){
        return [[0,0,0], [0,0,0]]
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (i === 0 && k === 0) {
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (matrix[i + 1][k + 1] === true) { // down right
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1
                    count = 0;
                }
            }
            if (i === 0 && k === 1) {
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (matrix[i + 1][k + 1] === true) { // down right
                    count++
                }
                if (matrix[i + 1][k - 1] === true) { //down left
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 0 && k === 2) {
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (matrix[i + 1][k - 1] === true) { //down left
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 1 && k === 0) {
                if (matrix[i - 1][k] === true) { // up
                    count++
                }
                if (matrix[i - 1][k + 1] === true) { // up right
                    count++
                }
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (matrix[i + 1][k + 1] === true) { // down right
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 1 && k === 1) {
                if (matrix[i - 1][k - 1] === true) {  //up left
                    count++
                }
                if (matrix[i - 1][k] === true) { // up
                    count++
                }
                if (matrix[i - 1][k + 1] === true) { // up right
                    count++
                }
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (matrix[i + 1][k - 1] === true) { //down left
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (matrix[i + 1][k + 1] === true) { // down right
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 1 && k === 2) {
                if (matrix[i - 1][k] === true) { // up
                    count++
                }

                if (matrix[i - 1][k - 1] === true) {  //up left
                    count++
                }
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (matrix[i + 1][k] === true) { //down
                    count++
                }
                if (matrix[i + 1][k - 1] === true) { //down left
                    count++
                }

                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 2 && k === 0) {
                if (matrix[i - 1][k] === true) { // up
                    count++
                }
                if (matrix[i - 1][k + 1] === true) { // up right
                    count++
                }
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 2 && k === 1) {
                if (matrix[i - 1][k - 1] === true) {  //up left
                    count++
                }
                if (matrix[i - 1][k] === true) { // up
                    count++
                }
                if (matrix[i - 1][k + 1] === true) { // up right
                    count++
                }
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (matrix[i][k + 1] === true) { // right
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }
            if (i === 2 && k === 2) {
                if (matrix[i - 1][k - 1] === true) {  //up left
                    count++
                }
                if (matrix[i - 1][k] === true) { // up
                    count++
                }
                if (matrix[i][k - 1] === true) { //left
                    count++
                }
                if (count > 1) {
                    minesweeperField[i][k] = 2;
                    count = 0;
                } else {
                    minesweeperField[i][k] = 1;
                    count = 0;
                }
            }

/*             if (matrix[i - 1][k - 1] === true) {  //up left
                count++
            }
            if (matrix[i - 1][k] === true) { // up
                count++
            }
            if (matrix[i - 1][k + 1] === true) { // up right
                count++
            }
            if (matrix[i][k - 1] === true) { //left
                count++
            }
            if (matrix[i][k + 1] === true) { // right
                count++
            }
            if (matrix[i + 1][k - 1] === true) { //down left
                count++
            }
            if (matrix[i + 1][k] === true) { //down
                count++
            }
            if (matrix[i + 1][k + 1] === true) { // down right
                count++
            }
            if (count > 1) {
                minesweeperField[i][k].push(2)
                count = 0;
            } else {
                minesweeperField[i][k].push(1)
                count = 0;
            } */
        }
    }
    return minesweeperField;
}

let result = minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
])

console.log(result);