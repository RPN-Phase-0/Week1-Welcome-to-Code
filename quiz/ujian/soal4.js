function xo(str) {
    let jumlahO = ''; // variabel penampung
    let jumlahX = ''; // variable penampung

    for (let i = 0; i < str.length; i++) { // looping sebanyak panjang dari variable str
        if (str[i] === 'o') { // jika str[i] = 'o', maka jumlahO akan ditmbah
            jumlahO++;
        } else if (str[i] === 'x') { // jika str[i] = 'x', maka jumlahX akan ditambah
            jumlahX++;
        }
    }
    return jumlahO === jumlahX;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true