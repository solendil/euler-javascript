
problem[64] = {
    answer: 1322,
    solver: function() {
        let res = 0;
        for (let i of range(2,10000)) {
            let cont = sqrt_continued_fraction(i);
            if (cont.length>1 && ((cont.length-1)%2)!==0)
                res++;
        }
        return res;
    },
    data: null,
};
