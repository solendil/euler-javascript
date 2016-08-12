
problem[28] = {
    answer: 669171001,
    solver: function() {
        const SIZE = 1001;
        const circles = Math.trunc(SIZE/2);
        let val = 1, step = 2, res = 1;
        for (let i of range(1,circles)) {
            val += step; res += val;
            val += step; res += val;
            val += step; res += val;
            val += step; res += val;
            step += 2;
        }
        return res;
    }
};
