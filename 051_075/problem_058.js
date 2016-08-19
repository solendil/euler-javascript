
problem[58] = {
    answer: 26241,
    solver: function() {
        const SIZE = 70000;
        const circles = Math.trunc(SIZE/2);
        let val = 1, step = 2;
        let nbs = 1, primes=0;
        for (let i of range(1,circles)) {
            val += step; if(isPrime(val)) primes++;
            val += step; if(isPrime(val)) primes++;
            val += step; if(isPrime(val)) primes++;
            val += step; if(isPrime(val)) primes++;
            nbs+=4;
            let ratio = primes/nbs;
            //console.log(i*2+1, nbs, primes, ratio, ratio<0.1);
            if (ratio<0.1) {
                return i*2+1;
            }
            step += 2;
        }
        //return -1;
    },
    data: null,
};
