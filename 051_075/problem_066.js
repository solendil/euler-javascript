problem[66] = {
    answer: 661,
    solver: function() {
        let p1_b = new BigNumber(1);
        let res, max = new BigNumber(0);
        for (let D of range(2,1000)) {
            if (isSquare(D))
                continue;
            let D_b = new BigNumber(D);
            // https://en.wikipedia.org/wiki/Pell%27s_equation
            for (let [a,b] of convergents(sqrt_continued_fraction(D))) {
                if (a.times(a).minus(D_b.times(b).times(b)).equals(p1_b)) {
                    // console.log(`${a}² - ${D}.${b}² = 1`);
                    if (a.greaterThan(max)) {
                        max = a;
                        res = D;
                    }
                    break;
                }
            }
        }
        return res;
    },
    data: null,
};
