
function division_cycle(n) {
  let previous = [];
  let iter = 1, left = 10;
  while(true) {
    while (left<n)
      left*=10;
    if (previous.indexOf(left)!=-1) {
      return {recur:true,digits:previous.length-previous.indexOf(left)};
    }
    previous.push(left);
    let res = Math.trunc(left/n);
    let remain = left%n;
    if (remain===0) {
      return {recur:false,digits:iter};
    }
    left = remain;
    iter++;
  }
}

problem[26] = {
    answer: 983,
    solver: function() {
      let max=0, res=0;
      for (let d of range(1,999)) {
        let v = division_cycle(d);
        if (v.recur && v.digits>max) {
          max = v.digits;
          res = d;
        }
      }
      return res;
    }
};
