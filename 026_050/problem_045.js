// Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
// Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
// Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
problem[45] = {
    answer: 1533776805,
    solver: function() {
      let n=285;
      while (true) {
        n++;
        let T = n*(n+1)/2;
        if (isPentagonal(T) && isHexagonal(T)) {
            return T;
        }
      }
    }
};
