// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.
problem[10] = {
  answer:142913828922,
  solver:function() {
    let res = 0;
    for (let i of primes()) {
      if (i>=2000000) break;
      res+=i;
    }
    return res;
  }
};
