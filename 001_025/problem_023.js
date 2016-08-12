
problem[23] = {
    answer: 4179871,
    solver: function() {
      let abundants = new Set();
      for (let i of range(1,28123))
        if (sum(proper_divisors(i))>i)
          abundants.add(i);
      let res = 0;
      for (let i of range(1,28123)) {
        let sum = false;
        for (let a of abundants) {
          if (a>i) break;
          let b = i-a;
          if (abundants.has(b)) {
            sum = true;
            break;
          }
        }
        if (!sum)
          res+=i;
      }
      return res;
    }
};
