(function() {
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  function loadScript(url, resolveOnError) {
    return new Promise(function(resolve, reject) {
      var r = false,
        t = document.getElementsByTagName("script")[0],
        s = document.createElement("script");

      s.type = "text/javascript";
      s.src = url;
      s.async = true;
      s.onload = s.onreadystatechange = function() {
        if (!r && (!this.readyState || this.readyState == "complete")) {
          r = true;
          resolve("OK");
        }
      };
      if (resolveOnError)
        s.onerror = s.onabort = () => {
          resolve(new Error("Cannot read url " + url));
        };
      else
        s.onerror = s.onabort = reject;
      t.parentNode.insertBefore(s, t);
    });
  }
  function scriptPath(i) {
    let a = (i-1)-((i-1)%25)+1;
    let b = a+24;
    let dir = pad(a,3)+"_"+pad(b,3);
    return `${dir}/problem_${pad(i,3)}.js`;
  }

  problem = {};

  function everythingLoaded() {
    let max = Math.max(...Object.keys(problem));
    for (let i of range(max, 1)) {
      if (!(i in problem)) {
        let res = "problem " + i + " not solved";
        console.log(res);
        continue;
      }
      let pro = problem[i];
      var t0 = performance.now();
      let computed = pro.solver();
      var t1 = performance.now();
      let ok = computed === pro.answer;
      let res = "problem " + i;
      if (computed === pro.answer) {
        res += ", ok";
      } else {
        res += ", KO (got " + computed + ", expected " + pro.answer + ")";
      }
      res += " in " + (t1 - t0).toFixed(3) + "ms";
      console.log(res);

      break; // dev mode, take only last problem
    }
  }

  let promises = [];
  for (let i of range(50, 60))
    promises.push(loadScript(scriptPath(i), true));

  Promise.all(promises).then(function(success) {
    everythingLoaded();
  }, function(err) {
    console.log("boo", err);
  });
})();
