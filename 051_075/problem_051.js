problem[51] = {
    answer: 121313,
    solver: function() {
      // why did I use arrays instead of strings ?
      for (let lg of range(2,10)) {
        //console.log("range", lg);
        let nbCombinations = Math.pow(2, lg);
        for (let combi=1; combi<nbCombinations-1; combi++) {
          let mask = [];
          let nbDigits = 0;
          for (let i of range(0, lg-1)) {
            if ((combi & Math.pow(2,i))) {
              mask.push("*"); // replace
            } else {
              nbDigits++;
              mask.push("-"); // digit
            }
          }
          for (let numbers of range(0,Math.pow(10,nbDigits)-1)) {
            let mask_filled_numbers = mask.slice();
            let digits = pad(numbers,nbDigits).split('');
            for (let digit of digits)
              mask_filled_numbers[mask_filled_numbers.indexOf("-")] = digit;
            // now fill replacement digits
            let nbPrimes = 0;
            for (let digit of range(0,9)) {
              let mask_filled_all = mask_filled_numbers.slice().map(x => x=='*'?digit:x);
              if (mask_filled_all[0]===0 || mask_filled_all[0]==='0')
                continue;
              let nb = Number(mask_filled_all.join(''));
              if (isPrime(nb)) {
                nbPrimes ++;
              }
            }
            if (nbPrimes==8) {
              return Number(mask_filled_numbers.slice().map(x => x=='*'?1:x).join(''));
            }
          }
        }
      }
    }
};
