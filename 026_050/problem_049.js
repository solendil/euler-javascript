// The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
// Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
problem[48] = {
    answer: 9110846700,
    solver: function() {
      BigNumber.config({ POW_PRECISION: 0 });
      let nb = new BigNumber(0);
      for (let i of range(1,1000)) {
        let val = new BigNumber(i).pow(i);
        nb = nb.plus(val);
      }
      let res = nb.toFixed();
      return Number(res.substr(res.length-10));
    }
};
