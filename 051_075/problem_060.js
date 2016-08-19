
problem[60] = {
    answer: 26033,
    solver: function() {
        let i=0;
        let cache = {};
        function isConcatPrime(stra,strb) {
            let concat = stra+strb;
            let res = cache[concat];
            if (!res) {
                res = isPrime(Number(concat));
                cache[concat] = res;
            }
            return res;
        }
        function *anyTwo(arr) {
            for (let i=0; i<arr.length; i++)
                for (let j=0; j<arr.length; j++)
                    if (i!==j)
                        yield[arr[i],arr[j]];
        }
        for (let a of primes()) {
            let stra = String(a);
            //console.log("---a", a);
            if (a>20000) return;
            loopb:for (let b of primes(a)) {
                if (b===2 || b===5) continue;
                let strb = String(b);
                for (let [A,B] of anyTwo([stra,strb])) if (!isConcatPrime(A,B)) continue loopb;
                loopc:for (let c of primes(b)) {
                    if (c===2 || c===5) continue;
                    let strc = String(c);
                    for (let [A,B] of anyTwo([stra,strb,strc])) if (!isConcatPrime(A,B)) continue loopc;
                    loopd: for (let d of primes(c)) {
                        if (d===2 || d===5) continue;
                        let strd = String(d);
                        for (let [A,B] of anyTwo([stra,strb,strc,strd])) if (!isConcatPrime(A,B)) continue loopd;
                        loope: for (let e of primes(d)) {
                            if (e===2 || e===5) continue;
                            let stre = String(e);
                            for (let [A,B] of anyTwo([stra,strb,strc,strd,stre])) if (!isConcatPrime(A,B)) continue loope;
                            //console.log("found!",a,b,c,d,e);
                            return a+b+c+d+e;
                        }
                    }
                }
            }
        }
    },
    data: null,
};
