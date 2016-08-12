

problem[24] = {
    answer: 2783915460,
    solver: function() {
      var per = permutations(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
      per = per.map(a => a.join(''));
      per.sort();
      return Number(per[999999]);
    }
};
