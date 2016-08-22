function *fibonacci() {
  let a=0, b=1;
  while(true) {
    yield b;
    [a, b] = [b, a+b];
  }
}

function *fibonacci_big() {
  let a=new BigNumber(0), b=new BigNumber(1);
  while(true) {
    yield b;
    [a, b] = [b, a.plus(b)];
  }
}

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

function *range(a,b) {
  if (a<b) {
    for(let i=a; i<=b; i++)
      yield i;
  } else {
    for(let i=a; i>=b; i--)
      yield i;
  }
}

function* range_big(a, b) {
    a = new BigNumber(a);
    b = new BigNumber(b);
    if (a.lessThan(b)) {
        for (; a.lessThanOrEqualTo(b); a = a.plus(1))
            yield a;
    } else {
        for (; a.greaterThanOrEqualTo(b); a = a.minus(1))
            yield a;
    }
}

var primes_mem=[2, 3, 5, 7];
function *primes(max) {
    max = max || Number.MAX_VALUE;
    // yield memoized
    for (let prime of primes_mem)
        if (prime>max)
            break;
        else
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
      if (nb>max)
          break;
      else
          yield nb;
    }
}

var primes_mem=[2, 3, 5, 7];
function ensure_primes(val) {
  if (primes_mem[primes_mem.length-1]<val)
    for (let prime of primes())
      if (prime>val)
        return;
}

function isPrime(nb) {
    if (nb<=1) return false;
    if (nb==2) return true;
  ensure_primes(Math.sqrt(nb));
  let sq = Math.sqrt(nb);
  for(let i of primes_mem) {
    if (nb%i===0)
      return false;
    if (i>sq)
      break;
  }
  return true;
}

function primeFactorsLinear(nb) {
  if (nb==1) return[];
  let res=[];
  for (let prime of primes()) {
    while (nb%prime===0) {
      res.push(prime);
      nb = nb/prime;
      if (nb===1)
        return res;
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

function collatzLength(nb) {
  let res = 1;
  while (nb!=1) {
    res++;
    if (nb%2===0)
      nb=nb/2;
    else
      nb = nb*3+1;
  }
  return res;
}

function factorial(nb) {
  if (nb==0) return 1;
  if (nb==1) return 1;
    let res=1;
    for (let i of range(2,nb)) res*=i;
    return res;
}

function factorial_big(nb) {
    let res = new BigNumber(1);
    for (let i=new BigNumber(2); i.lessThanOrEqualTo(nb); i=i.plus(1))
        res = res.times(i);
    return res;
}

function combinationCount(k, n) {
    return factorial(n)/(factorial(k)*factorial(n-k));
}

text = {1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten",
11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen",
20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety"};

function toEnglish(nb) {
    if (nb>=1000) throw new Error("Invalid number");
    let res = "";
    let hundred = Math.trunc(nb/100);
    if (hundred>=1) {
        res += text[hundred] + " hundred";
        nb = nb - hundred*100;
        if (nb!==0)
            res +=  " and ";
    }
    if (nb<=20 && nb>0) {
        res += text[nb];
    } else if (nb>0) {
        let tens = Math.trunc(nb/10);
        res += text[tens*10];
        nb = nb - tens*10;
        if (nb!==0)
            res += " " + text[nb];
    }
    return res;
}

function proper_divisors(nb) {
    let res=new Set();
    for (let combi of combinations(primeFactors(nb)))
      res.add(combi.reduce((res,nb)=>res*nb, 1));
    res.delete(nb);
    return [...res];
}

function sum(col) {
    if (col instanceof Set) {
        let res=0;
        for (let v of col) res+=v;
        return res;
    } else {
        return col.reduce((res, nb) => res+nb, 0);
    }
}

function permutations(array) {
  let result = [];
  (function(n, A) { // wikipedia's Heap algorithm
      var c = [];
      for(let i of range(0, n-1))
        c[i] = 0;
      result.push(A.slice());
      for (let i=0; i<n; ) {
        if (c[i]<i) {
          if (i%2===0)
            [ A[0],A[i] ] = [ A[i],A[0] ];
          else
            [ A[c[i]],A[i] ] = [ A[i],A[c[i]] ];
          result.push(A.slice());
          c[i] ++;
          i = 0;
        } else {
          c[i] = 0;
          i++;
        }
      }
  })(array.length, array);
  return result;
}

function getGcd(a, b) {
    if (a<=b)
      [a,b]=[b,a];
    while (b!==0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
}

function getLcm(a, b) {
  return a*b/getGcd(a,b);
}

function *digits(nb) {
    let chars = String(nb).split("");
    for (let c of chars)
      yield Number(c);
}

function digit_rotations(nb) {
  let chars = String(nb).split('');
  let nbDigits = chars.length;
  chars = chars.concat(chars);
  let res = [];
  for (let i of range(0,nbDigits-1)) {
    let iter = chars.slice(i, i+nbDigits);
    res.push(Number(iter.join('')));
  }
  return res;
}

function isPentagonal(nb) {
    let inv = (Math.sqrt(24*nb+1)+1)/6;
    return Number.isInteger(inv);
}

function isHexagonal(nb) {
  let inv = (Math.sqrt(8*nb+1)+1)/4;
  return Number.isInteger(inv);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

BigNumber.config({ POW_PRECISION: 0 });

// return continued fraction for the sqrt of the given int as an array
// res[0] is the first term, res[1...n] is the looping sequence of continued fractions
function sqrt_continued_fraction(nb) {
    let firstTerm = Math.trunc(Math.sqrt(nb));
    if (firstTerm*firstTerm===nb)
        return [firstTerm];
    let A=1, B=nb, C=firstTerm; // A / (sqrt(B)-C)
    let seq = [];
    let res = [firstTerm];
    function inner(A,B,C) {
        let intPart = Math.trunc(A/(Math.sqrt(B)-C));
        if (seq.includes(A+"_"+C)) {
            // loop detected
            if (seq.indexOf(A+"_"+C)!==0)
                throw "weird loop";
            return;
        }
        seq.push(A+"_"+C);
        res.push(intPart);
        let denom = (B-C*C)/A;
        let num = (A*C-intPart*(B-C*C))/A;
        inner(denom, B, -num);
    }
    inner(A,B,C);
    return res;
}

// yield convergents [a,b] (a/b) for the given continued fraction
function *convergents (cont) {
    let rank = 0;
    while (true) {
        let a=new BigNumber(1), b=new BigNumber(0);
        for (let i=rank; i>=0; i--) {
            let index = (i===0)?0: (i-1) % (cont.length-1) + 1;
            let c = new BigNumber(cont[index]);
            let swap = a;
            a = b;
            b = swap;
            a = c.times(b).plus(a);
        }
        yield [a,b];
        rank++;
    }
}

function isSquare(nb) {
    let sq = Math.trunc(Math.sqrt(nb));
    return sq*sq===nb;
}
