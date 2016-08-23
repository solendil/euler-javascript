
problem[69] = {
    answer: 510510,
    solver: function() {
        let res = 0, max = 0;
        for (let nb of range(2,1000000)) {
            let ratio = nb/totient(nb);
            if (ratio>max) {
                max = ratio;
                res = nb;
            }
        }
        return res;
    },
    data:null,
};
