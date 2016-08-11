
problem[43] = {
    answer: 16695334890,
    solver: function() {
        function extract(ar, d1, d2, d3) {
            return Number(ar[d1-1]+ar[d2-1]+ar[d3-1]);
        }
        let pans = permutations(['0','1','2','3','4','5','6','7','8','9']);
        let res = 0;
        for (let pan of pans) {
            let val = true;
            val = val && extract(pan,2,3,4) % 2 === 0;
            val = val && extract(pan,3,4,5) % 3 === 0;
            val = val && extract(pan,4,5,6) % 5 === 0;
            val = val && extract(pan,5,6,7) % 7 === 0;
            val = val && extract(pan,6,7,8) % 11 === 0;
            val = val && extract(pan,7,8,9) % 13 === 0;
            val = val && extract(pan,8,9,10) % 17 === 0;
            if (val) {
                res+=Number(pan.join(''));
            }
        }
        return res;
    }
};
