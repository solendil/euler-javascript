// Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers
// less than or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine
// and relatively prime to nine, φ(9)=6.
// The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.
// Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.
// Find the value of n, 1 < n < 107, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.
problem[70] = {
    answer: 8319823,
    solver: function() {
        let min = Number.MAX_VALUE, res, comp=0;
        for (let nb of range(2,10000000-1)) {
            let phi = totient(nb);
            let a = String(nb);
            let b = String(phi);
            if (isAnagram(a,b)) {
                let ratio = nb/phi;
                if (ratio<min) {
                    min = ratio;
                    res = nb;
                }
            }
            if (nb%10000===0) console.log(nb);
        }
        return res;
    },
    data:null,
};
