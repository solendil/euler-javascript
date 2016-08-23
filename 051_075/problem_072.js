problem[72] = {
    answer: "303963552391",
    solver: function() {
        let res = 0;
        for (let d of range(2,1000000)) {
            res += totient(d);
        }
        return String(res);
    },
    data:null,
};
