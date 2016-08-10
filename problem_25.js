
problem[25] = {
    answer: 4782,
    solver: function() {
      let index = 1;
      for (let i of fibonacci_big()) {
        if (i.toFixed().length>=1000)
          break;
        index++;
      }
      return index;
    }
};
