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
  let combis = combinations(primeFactors(nb));
  let res=new Set();
  for (let combi of combis) {
    let divisor = 1;
    for (let prime of combi)
      divisor *= prime;
    res.add(divisor);
  }
  return [...res];
}

problem[12] = {
  answer: 76576500,
  solver: function() {
    for(let triangle of triangleNumbers()) {
      if (divisors(triangle).length>500)
        return triangle;
    }
  }
};
