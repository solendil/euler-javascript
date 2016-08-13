// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
// 9 = 7 + 2×12
// 15 = 7 + 2×22
// 21 = 3 + 2×32
// 25 = 7 + 2×32
// 27 = 19 + 2×22
// 33 = 31 + 2×12
// It turns out that the conjecture was false.
// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
problem[46] = {
    answer: 5777,
    solver: function() {
      for (let nb=9; ; nb+=2) {
        if (isPrime(nb))
          continue;
        let sq = Math.trunc(Math.sqrt(nb));
        let found = false;
        for (let i of range(1, sq)) {
          let remain = nb-2*i*i;
          if (isPrime(remain)) {
            found = true;
            break;
          }
        }
        if (!found)
          return nb;
      }
    }
};
