// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
﻿problem[32] = {
    answer: 45228,
    solver: function() {
        let set = new Set();
        for (let a of range(1,10000)) {
            for (let b of range(a,10000)) {
                let c = a*b;
                let concat = String(a)+String(b)+String(c);
                if (concat.length>9)
                    break;
                if (concat.length<9)
                    continue;
                if (concat.split("").sort().join('')==="123456789") {
                    set.add(c);
                }
            }
        }
        return sum(set);
    }
};
