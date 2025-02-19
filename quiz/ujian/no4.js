function xo(str) {
    let x = 0;
    let o = 0;
    for(let i=0; i<= str.length-1; i++){
        if(str[i] === "x"){
            x += 1;
        } else if (str[i] === "o"){
            o += 1;
        }
    }
    if(x === o){
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true