
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
problem[7] = {
  answer:104743,
  solver:function() {
    let res = 0, i = 1;
    for (res of primes())
      if (i++===10001) break;
    return res;
  }
};
