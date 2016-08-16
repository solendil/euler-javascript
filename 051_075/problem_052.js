// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
problem[52] = {
    answer: 142857,
    solver: function() {
      out: for (let i of range(1,Number.MAX_SAFE_INTEGER)) {
        let stri = String(i).split('').sort().join('');
        for (let j of [2,3,4,5,6]) {
          let strj = String(i*j).split('').sort().join('');
          if (stri!==strj)
            continue out;
        }
        return i;
      }
    }
};
