
problem[65] = {
    answer: 272,
    solver: function() {
        let econt = [2];
        for (let i of range(1,10000)) {
            econt.push(1);
            econt.push(i*2);
            econt.push(1);
        }
        function econv_b(cont, rank) {
            let a=new BigNumber(1), b=new BigNumber(0);
            for (let i=rank; i>=0; i--) {
                let c = new BigNumber(cont[i]);
                let swap = a;
                a = b;
                b = swap;
                a = c.times(b).plus(a);
            }
            return [a,b];
        }
        let [a,b] = econv_b(econt,99);
        console.log(sum(a.toFixed().split('').map(_=>Number(_))));
    },
    data: null,
};
