
problem[19] = {
  answer:171,
  solver: function() {
      let day = moment("1901-01-01");
      let last = moment("2001-01-01");
      let res = 0;
      while (day.isBefore(last)) {
          if (day.date()===1 && day.day()===0)
            res++;
          day = day.add(1,'d');
      }
    return res;
  }
};
