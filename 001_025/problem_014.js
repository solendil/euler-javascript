
problem[14] = {
  answer:837799,
  solver: function() {
    let max = 0, res = 0;
    for (let i of range(1, 1000000)) {
      let col = collatzLength(i);
      if (col>max) {
        res=i;
        max=col;
      }
    }
    return res;
  }
};
