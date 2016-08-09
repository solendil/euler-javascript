
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
problem[5] = {
  answer:232792560,
  solver:function() {
    let bag = new Bag();
    for(let i of range(2,20)) {
      var primeBag = new Bag();
      primeBag.addAll(primeFactors(i));
      bag.ensure(primeBag);
    }
    let res=1;
    for(let divider of bag.iteratorFlat()) {
      res*=divider;
    }
    return res;
  }
};
