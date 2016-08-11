

// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain
// prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
problem[37] = {
    answer: 748317,
    solver: function() {
        let res=0, nb=0;
        out: for (let i of range(10,100000000)) {
            if (!isPrime(i)) continue out;
            let str = String(i);
            for (let i of range(1, str.length-1))
                if (!isPrime(Number(str.substr(i)))) continue out;
            for (let i of range(str.length-1, 1))
                if (!isPrime(Number(str.substr(0, i)))) continue out;
            res += i;
            nb++;
            if (nb===11) break;
        }
        return res;
    }
};
