
// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
// (Please note that the palindromic number, in either base, may not include leading zeros.)
problem[36] = {
    answer: 872187,
    solver: function() {
      let res = 0;
      for (let i of range(0,999999)) {
        if (isPalindrome(String(i)) && isPalindrome(i.toString(2))) {
          res+=i;
        }
      }
      return res;
    }
};
