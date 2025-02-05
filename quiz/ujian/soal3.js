function konversiMenit(menit) {
    let jam = Math.floor(menit / 60); // mencari hasil dari menit / 60 lalu dibulatkan kebawah
    let minute = menit % 60;  // mencari sisabagi 

    // minute = minute < 10 ? '0' + minute : minute; 
    if (minute < 10) { // jika minute < 10, akan ditambahkan 0
        minute = '0' + minute;
    }

    return `${jam}:${minute}`;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00