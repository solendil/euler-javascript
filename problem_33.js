
problem[33] = {
    answer: 100,
    solver: function() {
      let fractions = [];
      for (let a of range(10,99)) {
        for (let b of range(a+1,99)) {
          if (b<=a) continue;
          let c = a/b;
          let stra = String(a).split("");
          let strb = String(b).split("");
          if (stra[1]===strb[0]) {
            let d = Number(stra[0])/Number(strb[1]);
            if (Math.abs(c-d)<Number.EPSILON)
              fractions.push([a,b]);
          }
          if (stra[0]===strb[1]) {
            let d = Number(stra[1])/Number(strb[0]);
            if (Math.abs(c-d)<Number.EPSILON)
              fractions.push([a,b]);
          }
          if (stra[1]===strb[1] && stra[1]!=='0') {
            let d = Number(stra[0])/Number(strb[0]);
            if (Math.abs(c-d)<Number.EPSILON)
              fractions.push([a,b]);
          }
          if (stra[0]===strb[0]) {
            let d = Number(stra[1])/Number(strb[1]);
            if (Math.abs(c-d)<Number.EPSILON)
              fractions.push([a,b]);
          }
        }
      }
      let nom=1, denom=1;
      for (let f of fractions) {
        nom*=f[0];
        denom*=f[1];
      }
      denom /= getGcd(nom, denom);
      return denom;
    }
};
