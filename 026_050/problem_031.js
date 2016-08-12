
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
//
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:
//
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?
﻿problem[31] = {
    answer: 73682,
    solver: function() {
        let coins = [200, 100, 50, 20, 10, 5, 2, 1];
        function compose(target, coinRank) {
            if (coinRank>=coins.length)
                return 0;
            let coin = coins[coinRank];
            let coinsInTarget = Math.trunc(target/coin);
            let res=0;
            for (let i of range(coinsInTarget, 0)) {
                let remain = target - i*coin;
                if (remain===0)
                    res++;
                else
                    res+=compose(remain, coinRank+1);
            }
            return res;
        }
        return compose(200, 0);
    }
};
