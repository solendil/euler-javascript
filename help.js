fibonacci = function* () {
  let a=0, b=1;
  while(true) {
    yield b;
    [a, b] = [b, a+b];
  }
};

function isPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

class Bag {
  constructor() {
    this.data = {};
  }
  add(item) {
    if (item in this.data)
      this.data[item] ++;
    else
      this.data[item] = 1;
  }
  addAll(items) {
    for(let item of items)
      this.add(item);
  }
  toString() {
    let skeys = Object.keys(this.data).sort();
    let res = "";
    return skeys.map(i=>`${i}:${this.data[i]}`).join(",");
  }
  *iteratorFlat() {
    for (let key in this.data)
      for (let nb=0; nb<this.data[key]; nb++)
        yield key;
  }
  // ensures this bags has all items of other bag
  ensure(other) {
    for(let i in other.data) {
      if (i in this.data) {
        this.data[i] = Math.max(this.data[i], other.data[i]);
      } else {
        this.data[i] = other.data[i];
      }
    }
  }
}

function *range(min,max) {
  for(let i=min; i<=max; i++)
    yield i;
}

var primes_mem=[2, 3, 5, 7];
function *primes() {
    // yield memoized
    for (let prime of primes_mem)
      yield prime;
    // now for the rest
    let nb = primes_mem.slice(-1).pop();
    out: while(true) {
      nb++;
      let sq = Math.sqrt(nb);
      for(let factor of primes_mem) {
        if (nb%factor===0)
          continue out;
        if (factor>=sq)
          break;
      }
      primes_mem.push(nb); // memoize
      yield nb;
    }
}

function primeFactorsLinear(nb) {
  let res=[];
  while (nb!=1) {
    for (let prime of primes()) {
      if (nb%prime===0) {
        res.push(prime);
        nb = nb/prime;
        break;
      }
    }
  }
  return res;
}

function primeFactorsRecursive(nb) {
  for (let i=2; i<=nb; i++) {
    if (nb%i===0) {
      let res = primeFactorsRecursive(nb/i);
      res.push(i);
      return res;
    }
  }
  return[];
}

// still faster because generators are slow
// need a linear non-generator version
primeFactors = primeFactorsRecursive;

function *triangleNumbers() {
  let res=0, nb=1;
  while (true) {
    res+=nb++;
    yield res;
  }
}

function combinations(input) {
  let res = [];
  let nb = Math.pow(2, input.length);
  for(let i of range(0, nb-1)) {
    let combi = [];
    for (let j of range(0, input.length-1)) {
      if ((i & Math.pow(2,j))) {
        combi.push(input[j]);
      }
    }
    res.push(combi);
  }
  return res;
}

function divisors(nb) {
  let res=new Set();
  for (let combi of combinations(primeFactors(nb)))
    res.add(combi.reduce((res,nb)=>res*nb, 1));
  return [...res];
}
