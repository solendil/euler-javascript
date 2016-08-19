
problem[57] = {
    answer: 153,
    solver: function() {
        let two = new BigNumber(2);

        function c2p1sp(a, b) {
            // 2 + 1/(A/B) = 2 + B/A = 2A/A + B/A = 2A+B / A
            return [two.times(a).plus(b), a];
        }

        function c1p1sp(a, b) {
            // 1 + 1/(A/B) = 1 + B/A = A/A + B/A = A+B / A
            return [a.plus(b), a];
        }

        function iter(n) {
            var a = new BigNumber(5), b = two;
            for (let i = 0; i < n-2; i++) {
                [a, b] = c2p1sp(a, b);
            }
            [a, b] = c1p1sp(a, b);
            return [a, b];
        }

        let res = 0;
        for (let i of range(0,1000)) {
            let frac = iter(i);
            if (frac[0].toFixed().length>frac[1].toFixed().length) {
                res++;
            }
        }
        return res;
    },
    data: null,
};
