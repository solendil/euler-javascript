# Project Euler in javascript

This is an experiment of solving https://projecteuler.net/ problems using Javascript. Code must work only in Chrome; so latest ES6 is allowed. These little programs make use of:

* generators
* spread operator
* destructuring assignment
* Set
* for... of
* arrow notation

```javascript
function divisors(nb) {
  let res=new Set();
  for (let combi of combinations(primeFactors(nb)))
    res.add(combi.reduce((res,nb)=>res*nb, 1));
  return [...res];
}
```
