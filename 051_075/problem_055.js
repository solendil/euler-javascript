problem[55] = {
    answer: 249,
    solver: function() {
        let isLychrel = function(nb) {
            let b = new BigNumber(nb);
            for (let i of range(1,50)) {
                let ib = new BigNumber(b.toFixed().split('').reverse().join(''));
                b = b.plus(ib);
                if (isPalindrome(b.toFixed())) {
                    return false;
                }
            }
            return true;
        };
        let res = 0;
        for (let i of range(1,10000)) {
            if (isLychrel(i))
            res++;
        }
        return res;
    },
    data: null,
};
