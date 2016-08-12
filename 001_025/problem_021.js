// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.
problem[21] = {
    answer: 31626,
    solver: function() {
        let res = 0;
        for (let i of range(2,9999)) {
            let ami = sum(proper_divisors(i));
            if (ami!=i && sum(proper_divisors(ami))==i) {
                res+=i;
            }
        }
        return res;
    }
};
