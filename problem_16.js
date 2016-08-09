
problem[16] = {
  answer:1366,
  solver: function() {
    BigNumber.config({ POW_PRECISION: 0 });
    var nb = new BigNumber(2).pow(1000);
    let res = 0;
    for (let char of nb.toFixed()) {
      res+=Number(char);
    }
    return res;
  }
};
