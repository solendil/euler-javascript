
// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!
problem[20] = {
    answer: 648,
    solver: function() {
        let f100 = factorial_big(100);
        let res = 0;
        for (let char of f100.toFixed()) {
            res += Number(char);
        }
        return res;
    }
};
