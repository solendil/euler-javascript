// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
problem[4] = {
  answer:906609,
  solver:function() {
    let res=0;
    for(let i=100; i<1000; i++)
      for(let j=100; j<1000; j++) {
        let nb = i*j;
        if (isPalindrome(String(nb)))
          res=Math.max(res, nb);
      }
    return res;
  }
};
