function xo(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      x++;
    } else if (str[i] === 'o') {
      o++;
    } 
  }
  if (x === o) {
    console.log(true);
  } else {
    console.log(false);
  }
}


xo('xoxoxo'); 
xo('oxooxo'); 