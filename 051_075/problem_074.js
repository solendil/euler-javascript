problem[74] = {
    answer: 402,
    solver: function() {
        let facs = [1,1,2,6,24,120,720,5040,40320,362880];

        function factorialChainLength(nb) {
            let chain = {nb:0};
            let index = 1;
            while (true) {
                let next = 0;
                for (let d of nb.toFixed())
                    next += facs[d.charCodeAt(0)-48];
                if (next in chain) return index;
                chain[next] = index++;
                nb = next;
            }
        }

        let res = 0;
        for (let nb of range(1,1000000-1)) {
            //if (nb%1000===0)console.log(nb);
            if (factorialChainLength(nb)===60)
                res++;
        }
        return res;
    },
    data:null,
};
