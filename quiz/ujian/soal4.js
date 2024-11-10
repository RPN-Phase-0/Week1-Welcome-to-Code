function xo(str) {
    let stringX = (str.match(/x/g)).length;
    let stringO = (str.match(/o/g)).length;
    
    return stringX === stringO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true