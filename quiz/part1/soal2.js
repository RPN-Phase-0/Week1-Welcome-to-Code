// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 19; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 9; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2006; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
if(tanggal < 1 || tanggal > 31) {
    console.log("Masukkan Tanggal Yang Benar");
}else if(bulan < 1 || bulan > 12) {
    console.log("Masukkan Bulan Yang Benar");
}else if(tahun < 1000) {
    console.log("Zaman Apa itu woii, yang benar ajaa, masukkan lagii!!");
}else {
    switch (bulan) {
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari";
            break;
        case 3:
            bulan = "Maret";
            break;
        case 4:
            bulan = "April";
            break;
        case 5:
            bulan = "Mei";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "Desember";
            break;
    }
    
    console.log(tanggal, bulan, tahun);
}

