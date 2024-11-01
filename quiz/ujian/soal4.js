function xo(str) {
    const lower = str.toLowerCase();
    const x = (lower.match(/x/g) || []).length
    const o = (lower.match(/o/g) || []).length

    return x===o;
 }
   
 
 console.log(xo('xoxoxo')); 
 console.log(xo('oxooxo')); 
 console.log(xo('oxo')); 
 console.log(xo('xxxooo')); 
 console.log(xo('xoxooxxo')); 