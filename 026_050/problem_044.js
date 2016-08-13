
problem[44] = {
    answer: 5482660,
    solver: function() {
      let a = 1;
      while (true) {
        a++;
        let A = a*(3*a-1)/2;
        for (let b of range(1,a-1)) {
          let B = b*(3*b-1)/2;
          let D = A-B, C = A+B;
          if (isPentagonal(D) && isPentagonal(C)) {
            return D;
          }
        }
      }
    }
};
