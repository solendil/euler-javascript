
// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
// {20,48,52}, {24,45,51}, {30,40,50}
// For which value of p ≤ 1000, is the number of solutions maximised?
problem[39] = {
    answer: 840,
    solver: function() {
        let max=0, res=0;
        for (let p of range(1,999)) {
            let sols = 0;
            for (let a of range(1,Math.trunc(p/2))) {
                for (let b of range(1,Math.trunc(p/2))) {
                    let c = p-a-b;
                    if (c*c==a*a+b*b) 
                        sols++;
                }
            }
            if (sols>max) {
                max=sols;
                res = p;
            }
        }
        return res;
    }
};
