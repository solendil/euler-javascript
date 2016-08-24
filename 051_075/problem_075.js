problem[75] = {
    answer: 161667,
    solver: function() {
        const MAX = 1500000;
        let res = new Array(MAX+1).fill(0);
        for (let m of range(2,Math.sqrt(MAX/2))) {
            for (let n of range(1,m-1)) {
                if ((m-n)%2!==1)
                    continue;
                if (getGcd(m,n)!==1)
                    continue;
                let a = m*m-n*n;
                let b = 2*m*n;
                let c = m*m+n*n;
                let p = a+b+c;
                while (p<=MAX) {
                    res[p] ++;
                    p+=(a+b+c);
                }
            }
        }
        let resnb = 0;
        res.forEach(_=>{if (_===1) resnb++;});
        return resnb;

        /*
        a²+b²=c², a+b+c=2
        c compris entre 0.5 et sq2/2 de p (rapport noté d=c/p ou c=dp)
        a²+(p-a-dp)²=(dp)²
        a = 1/2(+-sq(d²p²+2dp²-p²)-dp+p)
        */

        // let mind = Math.sqrt(2)/(2+Math.sqrt(2));
        // let maxd = 0.5;
        // let res = 0;
        // for (let p of range(1500000, 2)) {
        //     if (p%1000===0)console.log(p);
        //     let minc = Math.ceil(p*mind);
        //     let maxc = Math.trunc(p*maxd);
        //     let sols = 0;
        //     for (let c of range(minc, maxc)) {
        //         let d = c/p;
        //         let a = 0.5*(Math.sqrt(d*d+2*d-1)-d+1) * p;
        //         let b = p-c-a;
        //         if (a*a+b*b===c*c) {
        //             sols++;
        //         }
        //     }
        //     if (sols===1) res++;
        // }
        // return res;
    },
    data:null,
};
