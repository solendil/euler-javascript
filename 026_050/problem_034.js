
problem[34] = {
    answer: 40730,
    solver: function() {
      let res = 0;
      for (let i of range(3,100000)) {
        let sum = 0;
        for (let d of digits(i))
          sum+=factorial(d);
        if (sum==i) {
          res+=i;
        }
      }
      return res;
    }
};
