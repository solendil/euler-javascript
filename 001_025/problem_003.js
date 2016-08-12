
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
problem[3] = {
  answer:6857,
  solver:function() {
    return Math.max(...primeFactors(600851475143));
  }
};
