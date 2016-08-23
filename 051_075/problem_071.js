problem[71] = {
    answer: 428570,
    solver: function() {
        let val = 3/7;
        let minwidth=1, res=0;
        for (let d of range(1,1000000)) {
            if (d===7) continue;
            let n = Math.trunc(val*d); // find the numerator for this denominator
            while (n>1 && getGcd(n,d)!==1) // and decrease until they are coprimes
                n--;
            let val2 = n/d;
            let width = val-val2;
            // console.log(n, d, val2, width);
            if (width<minwidth) {
                minwidth = width;
                res=n;
            }
        }
        return res;
    },
    data:null,
};
