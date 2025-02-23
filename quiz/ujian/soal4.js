function xo(str){
    let countX = 0 
    let countO = 0 
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === "x"){
            countX++;
        }else{
            countO++;
        }
    }
    if(countO === countX){
        return true;
    }else{
        return false
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true