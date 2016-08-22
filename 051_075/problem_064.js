
problem[64] = {
    answer: 1322,
    solver: function() {

        function gloub(nb) {
            let first = Math.trunc(Math.sqrt(nb));
            if (first*first===nb)
                return[];
            let A=1, B=nb, C=first;
            let seq = [];
            let res = [];
            function glib(A,B,C) {
                let int = Math.trunc(A/(Math.sqrt(B)-C));
                if (seq.includes(A+"_"+C)) {
                    return;
                }
                seq.push(A+"_"+C);
                res.push(int);
                let denom = (B-C*C)/A;
                let num = (A*C-int*(B-C*C))/A;
                glib(denom, B, -num);
            }
            glib(A,B,C);
            return res;
        }
        let res = 0;
        for (let i of range(2,10000)) {
            let cf = gloub(i);
            if (cf.length!==0 && cf.length%2!==0)
                res++;
        }
        console.log(res);
    },
    data: null,
};
