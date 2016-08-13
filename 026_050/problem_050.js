// The prime 41, can be written as the sum of six consecutive primes:
// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.
// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
// Which prime, below one-million, can be written as the sum of the most consecutive primes?
problem[50] = {
    answer: 997651,
    solver: function() {
      ensure_primes(1000000);
      let res=0, max=0;
      for (let i=0; i<primes_mem.length; i++) {
        let sum=0, lg=0;
        while (sum<1000000) {
          sum+=primes_mem[i+lg];
          if (isPrime(sum)) {
            if (lg>max) {
              res = sum;
              max = lg;
            }
          }
          lg++;
        }
      }
      return res;
    }
};
