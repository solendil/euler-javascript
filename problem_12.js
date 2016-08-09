
problem[12] = {
  answer: 76576500,
  solver: function() {
    for(let triangle of triangleNumbers()) {
      if (divisors(triangle).length>500)
        return triangle;
    }
  }
};
