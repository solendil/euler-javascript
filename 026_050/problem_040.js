
// An irrational decimal fraction is created by concatenating the positive integers:
// 0.123456789101112131415161718192021...
// It can be seen that the 12th digit of the fractional part is 1.
// If dn represents the nth digit of the fractional part, find the value of the following expression.
// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
problem[40] = {
    answer: 210,
    solver: function() {
        let str = "";
        for (let i of range(1,1000000)) {
            str+=String(i);
            if (str.length>1000000)
                break;
        }
        let res=1;
        for (let p of range(0,6)) {
            let rank = Math.pow(10,p);
            res*=Number(str[rank-1]);
        }
        return res;
    }
};
