function xo(str){
    let x = 0;
    let y = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            x++;
        } else if(str[i] === 'o'){
            y++;
        }
    }
    return x === y;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
