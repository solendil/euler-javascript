
problem[68] = {
    answer: "6531031914842725",
    solver: function() {
        let strs = new Set();
        let nbrs = [1,2,3,4,5,6,7,8,9,10];
        let combis = permutations(nbrs); // all possible permutations of 10 values
        let branchDefs = [[1,6,10],[5,10,9],[4,9,8],[3,8,7],[2,7,6]]; // branches in an arbitrary indexed Gon
        combiloop: for (let combi of combis) {
            let gonSum = 0;
            let branches = [];
            for (let branchDef of branchDefs) {
                let branchSum = 0;
                let branch = [];
                for (let cell of branchDef) {
                    branchSum += combi[cell-1];
                    branch.push(combi[cell-1]);
                }
                if (gonSum!==0 && branchSum!==gonSum)
                    continue combiloop;
                branches.push(branch);
                gonSum = branchSum;
            }
            // console.log("magic gon", combi, JSON.stringify(branches));
            let min = branches[0][0], indexMin = 0;
            for (let i in branches) {
                let branch = branches[i];
                if (branch[0]<min) {
                    min = branch[0];
                    indexMin = i;
                }
            }
            branches = branches.rotate(indexMin);
            let str = "";
            for (let branch of branches) str += branch.map(_=>String(_)).join('');
            if (str.length===16) {
                strs.add(str);
                // console.log("----",str);
                // console.log(indexMin, JSON.stringify(branches));
            }
        }
        return Array.from(strs).sort().reverse()[0];
    },
    data:null,
};
