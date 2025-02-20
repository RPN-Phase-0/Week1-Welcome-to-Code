const xo = (str = "") => {
  let jumlahX = 0;
  let jumlahO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") jumlahX++;
    if (str[i] === "o") jumlahO++;
  }

  return jumlahX === jumlahO;
};
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
