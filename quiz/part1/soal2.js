// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 27; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2011; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(true){
    case bulan == 1:
        console.log(tanggal + " Januari " + tahun);
        break;
    case bulan == 2:
        console.log(tanggal + " Februari " + tahun);
        break;
    case bulan == 3:
        console.log(tanggal + " Maret " + tahun);
        break;
    case bulan == 4:
        console.log(tanggal + " April " + tahun);
        break;
    case bulan == 5:
        console.log(tanggal + " Mei " + tahun);
        break;
    case bulan == 6:
        console.log(tanggal + " Juni " + tahun);
        break;
    case bulan == 7:
        console.log(tanggal + " Juli " + tahun);
        break;
    case bulan == 8:
        console.log(tanggal + " Agustus " + tahun);
        break;
    case bulan == 9:
        console.log(tanggal + " September " + tahun);
        break;
    case bulan == 10:
        console.log(tanggal + " Oktober " + tahun);
        break;
    case bulan == 11:
        console.log(tanggal + " November " + tahun);
        break;
    case bulan == 12:
        console.log(tanggal + " Desember " + tahun);
        break; 
}

