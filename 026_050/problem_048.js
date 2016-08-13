problem[49] = {
    answer: 296962999629,
    solver: function() {
      for (let i of range(1000,10000)) {
        if (!isPrime(i))
          continue;
        let is = String(i).split('').sort().join('');
        for (let inc of range(1,10000-i/2)) {
          let j = i+inc, k = i+2*inc;
          if (!isPrime(j) || !isPrime(k)) continue;
          let js = String(j).split('').sort().join('');
          if (js!=is) continue;
          let ks = String(k).split('').sort().join('');
          if (ks!=is) continue;
          if (i!=1487) {
            return Number(String(i)+String(i+inc)+String(i+2*inc));
          }
        }
      }
    }
};
