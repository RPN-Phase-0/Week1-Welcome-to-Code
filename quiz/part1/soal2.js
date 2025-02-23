// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12;  // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2200;  // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

    switch (bulan) {
        case 1:
            Bulan = "Januari";
            break;
        case 2:
            Bulan = "Februari";
            break;
        case 3:
            Bulan = "Maret";
            break;
        case 4:
            Bulan = "April";
            break;
        case 5:
            Bulan = "Mei";
            break;
        case 6:
            Bulan = "Juni";
            break;
        case 7:
            Bulan = "Juli";
            break;
        case 8:
            Bulan = "Agustus";
            break;
        case 9:
            Bulan = "September";
            break;
        case 10:
            Bulan = "Oktober";
            break;
        case 11:
            Bulan = "November";
            break;
        case 12:
            Bulan = "Desember";
            break;
 }

    console.log(`${tanggal} ${Bulan} ${tahun}`);


