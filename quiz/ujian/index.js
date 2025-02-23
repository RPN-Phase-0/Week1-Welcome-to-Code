function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        return true;
    } else if (angka1 > angka2) {
        return false;
    } else {
        return -1;
    }
}


console.log(bandingkanAngka(5, 8)); 
console.log(bandingkanAngka(5, 3)); 
console.log(bandingkanAngka(4, 4)); 
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2)); 

console.log('');


function balikKata(kata) {
    return kata.split('').reverse().join('');
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('saya ganteng')); 
console.log(balikKata('I am a superman')); 
console.log(balikKata('turu is my hobby')); 
console.log(balikKata('Super')); 

console.log(''); 


function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    return jam + ':' + (sisaMenit < 10 ? '0' : '') + sisaMenit;
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 

console.log('');
function xo(str) {
    let jumlahX = 0;
    let jumlahO = 0;

    for (let char of str) {
        if (char === 'x') jumlahX++;
        if (char === 'o') jumlahO++;
    }

    return jumlahX === jumlahO;
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo')); 
