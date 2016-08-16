problem[53] = {
    answer: 4075,
    solver: function() {
      function Crn(ri, ni) {
        let r = new BigNumber(ri);
        let n = new BigNumber(ni);
        // n! / r!(n-r)!
        return factorial_big(n).div(factorial_big(r).times(factorial_big(n-r)));
      }
      let million = new BigNumber(1000000);
      let res=0;
      for (let n of range(1,100)) {
        for (let r of range(1,n)) {
          if (Crn(r,n).greaterThan(million))
            res++;
        }
      }
      return res;
    }
};
