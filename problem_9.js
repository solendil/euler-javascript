// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
problem[9] = {
  answer:31875000,
  solver:function() {
    for (let a of range(1,500))
      for (let b of range(a+1,500)) {
        c=1000-a-b;
        if (a*a+b*b===c*c) {
          return a*b*c;
        }
      }
  }
};
