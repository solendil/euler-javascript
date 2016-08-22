
problem[63] = {
    answer: 0,
    solver: function() {
        let res =493;
        for (let n of range(1,100)) {
            let i=1;
            while (true) {
                let pow = new BigNumber(i).pow(n);
                let countDigit = pow.toFixed().length;
                if (countDigit==n) {
                    console.log(i, "^", n,  "=", pow.toFixed(), ",", countDigit);
                    res++;
                }
                if (countDigit > n)
                    break;
                i++;
            }
        }
        return res;
    },
    data: null,
};
