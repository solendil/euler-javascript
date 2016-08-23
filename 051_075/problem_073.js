problem[73] = {
    answer: 7295372,
    solver: function() {
        let a = 1/3, b = 1/2, res = 0;
        for (let d of range(3,12000)) {
            //if (d%100===0)console.log(d);
            for (let n of range(1,d-1)) {
                if (getGcd(n,d)!==1) continue;
                let val = n/d;
                if (val>a && val<b)
                    res++;
            }
        }
        return res;
    },
    data:null,
};
