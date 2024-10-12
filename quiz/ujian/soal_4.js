function xo(str) {
	// you can only write your code here!
	const x = str.split('x').length - 1;
	const o = str.split('o').length - 1;
	return x === o ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
