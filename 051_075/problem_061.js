
problem[61] = {
    answer: 28684,
    solver: function() {
      const limit = 10000;
      let pnum = [];
      pnum[3] = new Set();
      for (let n=1, nb=0; (nb=n*(n+1)/2)<limit && pnum[3].add(nb); n++);
      pnum[4] = new Set();
      for (let n=1, nb=0; (nb=n*n)<limit && pnum[4].add(nb); n++);
      pnum[5] = new Set();
      for (let n=1, nb=0; (nb=n*(3*n-1)/2)<limit && pnum[5].add(nb); n++);
      pnum[6] = new Set();
      for (let n=1, nb=0; (nb=n*(2*n-1))<limit && pnum[6].add(nb); n++);
      pnum[7] = new Set();
      for (let n=1, nb=0; (nb=n*(5*n-3)/2)<limit && pnum[7].add(nb); n++);
      pnum[8] = new Set();
      for (let n=1, nb=0; (nb=n*(3*n-2))<limit && pnum[8].add(nb); n++);

      let poly = {};
      for (let order of range(3,8)) {for (let nb of pnum[order]) poly[nb]=[];}
      for (let order of range(3,8)) {for (let nb of pnum[order]) poly[nb].push(order);}

      let brk = false, res = 0;
      function loop(nibbles, found, remain) {
        if (brk===true) return;
        if (remain===0) {
          let nb = Number(String(nibbles[nibbles.length-1])+String(nibbles[0]));
          let pol = poly[nb];
          if (!pol) return;
          for (let p of pol) {
            if (found.includes(p))
              return;
            else {
              // WOW FOUND
              brk=true;
              //console.log("found", nibbles, found.concat([p]));
              for (let i of range(0, nibbles.length-1))
                res+=Number(String(nibbles[i])+String(nibbles[(i+1)%nibbles.length]));
              return;
            }
          }
          return;
        }
        for (let nib of range(10,99)) {
          let nb = Number(String(nibbles[nibbles.length-1])+String(nib));
          let pol = poly[nb];
          if (!pol) continue;
          for (let p of pol) {
            if (found.includes(p))
              continue;
            else {
              loop(nibbles.concat([nib]), found.concat([p]), remain-1);
            }
          }
        }
      }

      for (let s1 of range(10,99)) {
        loop([s1],[],5);
      }

      return res;
    },
    data: null,
};
