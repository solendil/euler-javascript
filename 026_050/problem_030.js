problem[30] = {
    answer: 443839,
    solver: function() {
        let res = 0;
        for (let i of range (2, Math.pow(9,5)*6)) {
            let sum = 0;
            for (let char of String(i)) {
                let digit = Number(char);
                sum+=Math.pow(digit,5);
            }
            if (sum==i) {
                res+=i;
            }
        }
        return res;
    }
};
