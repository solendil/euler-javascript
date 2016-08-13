// The first two consecutive numbers to have two distinct prime factors are:
// 14 = 2 × 7
// 15 = 3 × 5
// The first three consecutive numbers to have three distinct prime factors are:
// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.
// Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?
problem[47] = {
    answer: 134043,
    solver: function() {
      function factorizedPrimeFactors(n) {
        let res = [];
        let factors = primeFactors(n);
        factors.sort();
        let cur = 0, nb = 1;
        for (let f of (factors)) {
          if (cur===0) {
            cur = f;
            continue;
          }
          if (cur===f) {
            nb++;
          } else {
            if (nb>1)
              res.push(cur+"^"+nb);
            else
              res.push(cur);
            nb=1;
            cur=f;
          }
        }
        if (nb>1)
          res.push(cur+"^"+nb);
        else
          res.push(cur);
        return res;
      }
      const NB = 4;
      for (let n of range(1, 1000000)) {
        let f1 = factorizedPrimeFactors(n); if (f1.length!=NB) continue;
        let f2 = factorizedPrimeFactors(n+1); if (f1.length!=NB) continue;
        let f3 = factorizedPrimeFactors(n+2); if (f1.length!=NB) continue;
        let f4 = factorizedPrimeFactors(n+3); if (f1.length!=NB) continue;
        let allfs = new Set();
        f1.forEach(f=>allfs.add(f));
        f2.forEach(f=>allfs.add(f));
        f3.forEach(f=>allfs.add(f));
        f4.forEach(f=>allfs.add(f));
        if (f1.length==4 && f2.length==4 && f3.length==4 && allfs.size==16) {
          console.log(n,n+1,f1,f2,f3,f4);
          return;
        }
      }
    }
};
