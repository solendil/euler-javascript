
problem[62] = {
    answer: "127035954683",
    solver: function() {
        const MAX = 10000;
        let cubes = [];
        let cmpcubes = [];
        for (let i of range(0, MAX)) {
            cubes[i] = new BigNumber(i).pow(3).toFixed();
            cmpcubes[i] = cubes[i].split('').sort().join('');
        }
        let groups = {};
        for (let i=0; i<MAX; i++) {
            let s = cmpcubes[i];
            if (!(s in groups)) groups[s] = [];
            groups[s].push(i);
            if (groups[s].length===5) {
                return cubes[groups[s][0]];
            }
        }
    },
    data: null,
};
