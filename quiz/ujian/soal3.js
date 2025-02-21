// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

/*
algoritma
1. siapkan parameter jam, dan ambil parameter menit
2. jika menit diatas angka 60, maka tambah angka ke var jam lalu var menit kurangi 60
3. jika menit dibawah angka 60, cetak hasil jam:menit
4. jika hasil akhir menit dibawah angka 9, maka tambahkan string 0 agar menjadi 01, 02, 03, dst
*/

function konversiMenit(menit) {
    let jam = 0;

    while(menit >= 60){
        jam += 1;
        menit -= 60;
    }

    if(menit < 9){
        menit = '0' + menit;
    }

    return(jam + ':' + menit);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00