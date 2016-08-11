
// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
// What is the largest n-digit pandigital prime that exists?
problem[41] = {
    answer: 7652413,
    solver: function() {
        let res = 0;
        let digits = ['1','2','3','4','5','6','7','8','9'];
        for (let nbdigit of range(2,9)) {
            let nbs = permutations(digits.slice(0,nbdigit));
            for (let ns of nbs) {
                let n = Number(ns.join(''));
                if (isPrime(n))
                    res = Math.max(res, n);
            }
        }
        return res;
    }
};
