
problem[17] = {
  answer:21124,
  solver: function() {
      let text = "one thousand";
      for (let i of range(1, 999))
        text += toEnglish(i);
      text = text.replace(/\s+/g,'');
      return text.length;
  }
};
