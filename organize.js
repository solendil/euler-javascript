/*global require, console*/
// NODE CODE
(function() {
  "use strict";
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const fs = require('fs');
  let files = fs.readdirSync(".");
  files.sort();
  let re = /problem_(\d*)\.js/;
  for (let file of files) {
    let match = re.exec(file);
    if (match) {
      let nb = Number(match[1]);
      nb = pad(nb, 3, '0');
      let a = (nb-1)-((nb-1)%25)+1;
      let b = a+24;
      let dir = pad(a,3)+"_"+pad(b,3);
      let newFile = `${dir}/problem_${nb}.js`;
      console.log(file,"->",newFile);
      try{fs.mkdirSync(dir);}catch(e){}
      fs.renameSync(file, newFile);
    }
  }
})();
