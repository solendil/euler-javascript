problem[56] = {
    answer: 972,
    solver: function() {
        let res = 0;
        for (let a of range(1,99)) {
            for (let b of range(1,99)) {
                let big = new BigNumber(a).pow(b);
                let s = sum(big.toFixed().split('').map(_=>Number(_)));
                res = Math.max(res,s);
            }
        }
        return res;
    },
    data: null,
};
