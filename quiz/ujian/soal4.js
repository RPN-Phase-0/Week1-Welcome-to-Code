function xo(str) {
    var xCounter = 0
    var oCounter = 0

    for (var i = 0, n = str.length; i < n; i++) {
        if (str[i] === "x") {
            xCounter++
        } else {
            oCounter++
        }
    }

    if (xCounter === oCounter) {
        return true
    } else {
        return false
    }
}
  
// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
