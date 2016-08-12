

problem[38] = {
    answer: 932718654,
    solver: function() {
        let res = 0;
        for (let i of range(1,99999)) {
            for (let n of range(2,9)) {
                let concat = "";
                for (let ni of range(1,n))
                    concat += Number(i*ni);
                if (concat.length>9) break;
                if (concat.length!=9) continue;
                if (concat.split("").sort().join("")==="123456789") {
                    res = Math.max(res, Number(concat));
                }
            }
        }
        return res;
    }
};
