// Soal 3
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    // menit dibagi 60, angka pertama jadi menit, sisanya kurangi dengan menit terus dikali 60

    let bagiAngka = menit / 60;
    let angkaPertama = Math.floor(bagiAngka);
    let sisaAngka = ((bagiAngka - angkaPertama) * 60).toFixed(0);
    if (sisaAngka.length == 1) {
        return angkaPertama + ':' + '0' + sisaAngka;
    } else {
        return angkaPertama + ':' + sisaAngka;
    }
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00