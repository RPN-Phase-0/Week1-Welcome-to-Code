// soal ke-1

function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1){
        return true;
    } else if (angka1 > angka2) {
        return false;
    } else if (angka1 === angka2) {
        return -1;
    } else {
        return "Tidak Valid";
    }
}

console.log(bandingkanAngka(1, 10));
console.log(bandingkanAngka(6, 3));
console.log(bandingkanAngka(9, 9));
console.log(bandingkanAngka("3"));


//soal ke-2

function balikKata(kata) {
    let word = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        return word += kata[i]
    }
    return word;
}

console.log(balikKata("MAKAN"));


//soal ke-3 

function konversiMenit(menit) {
    let hour = Math.floor(menit / 60);
    let minute = menit % 60;
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;
    return `${hour}:${minute}`;
}
console.log(konversiMenit(57));


//soal ke-4

function xo(str) {
    let x = 0;
    let o = 0;

    for (let i = 0; i < str.length; i++) {
        if ("xX".includes(str[i])) {
            x++;
        } else if ("oO".includes(str[i])){
            o++;
        }
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
    
}

console.log(xo("xxxxxoO"));
console.log(xo("xxxooo"));
console.log(xo("xoxoo"));
console.log(xo("xxXXoOxooo"));