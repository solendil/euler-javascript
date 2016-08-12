
problem[27] = {
    answer: -59231,
    solver: function() {
      let max=0, res=0;
      for (let a of range(-999, 999)) {
        for (let b of range(-1000, 1000)) {
          let n=0;
          while(true) {
            if(!isPrime(n*n+a*n+b))
              break;
            n++;
          }
          if (n>=max) {
            max=n;
            res=a*b;
          }
        }
      }
      return res;
    }
};
