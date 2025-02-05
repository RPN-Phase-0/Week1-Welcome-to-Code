let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let month = ''; // untuk menyimpan nilai month
switch (bulan) {
    case 1: month = 'januari'; break;
    case 2: month = 'februari'; break;
    case 3: month = 'maret'; break;
    case 4: month = 'april'; break;
    case 5: month = 'mei'; break;
    case 6: month = 'juni'; break;
    case 7: month = 'juli'; break;
    case 8: month = 'agustus'; break;
    case 9: month = 'september'; break;
    case 10: month = 'oktober'; break;
    case 11: month = 'november'; break;
    case 12: month = 'desember'; break;
    default: console.log('Bulan invalid');
}

if (tanggal < 1 || tanggal > 31) {
    console.log('Tanggal invalid');
} else if (tahun < 1900 || tanggal > 2200) {
    console.log('Tahun invalid');
} else {
    console.log(`${tanggal} ${month} ${tahun}`); // menampilkan output
}