module.exports = function reverse(n) {
    const reverseNumber = (n, acc) => 
        n === 0 ? acc : reverseNumber(Math.floor(n / 10), acc * 10 + n % 10)
    return reverseNumber(Math.abs(n), 0)
}
